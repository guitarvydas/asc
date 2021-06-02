# Template
## Port
	direction = { input | output }
	name = Relative Name
## Template
	kind = { composite | leaf }
	ports = [Port]
## Composite Template
	contains = [Template]
	connections = [Connection]
	
# Composite Template
## Container
	contains = [Template]
	connections = [Connection]
## Connection
	sender = { Template Port }
	receiver = { Template Port }

# Runnable Interface
# Dispatcher Interface
	predicate busy
	predicate ready
## Load Interface
	inputQueue = Queue
	outputQueue = Queue
## Send Interface
	effect Send (Port Event)
	effect Inject (Port Event)
	
# Runnable
	+= Runnable Interface
## Composite Instance
	+= Composite Template
	{ kind := composite }
## Leaf Instance
	+= Template
	{ kind := leaf }

# Dispatcher
	all = [Running]
	
