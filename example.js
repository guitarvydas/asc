function hello () {
    this.kind = "leaf";
    this.initially = function () {];
    this.react = function (e) {
	if (e.tag.portMatch ("./i/r")) {
	    this.send ("./o/s", ohello.greet ());
	} else {
	    this.abort ();
	}
    }
}

var layer0 = {
    kind : "composite",
    inputs : [ "./i/in" ],
    outputs : [ "./o/out" ],
    contains : [ 
	{name : "./c/layer1", 
	 interface: {inputs: [ "./c/layer1/i/a" ], outputs: [ "./c/layer1/o/b/" ]}}
    ],
    connections : [
	{ sender: "./i/in", receiver: "./c/layer1/i/a"},
	{ sender: "./c/layer1/o/b", receiver: "./o/out" }
    ]
};

var container1 = {
    kind : "composite",
    inputs : [ "./i/x" ],
    outputs : [ "./o/y" ],
    contains : [ {name:  "./c/hello",
		  kind: "foreign",
		  invocation: "synchronous",
		  interface: {
		      inputs: ["./c/hello/i/r"],
		      outputs: ["./c/hello/o/s"]))],
    connections : [
	{ sender: "./i/x", receiver : "./c/hello/i/r" },
	{ sender: "./c/hello/o/s", receiver: "./o/y" }
    ]
};

    
var top = instantiate (layer0);
top.inject ("./i/in", true);

function Runnable () {
    this.inputQueue = new Queue ();
    this.outputQueue = new Queue ();
    this.contains = [];
    this.busy = function () {
	if (this.kind === "composite") {
	    this.contains.some (comp => {
		if (comp.contains) {
		    return comp.some (busy);
		}
	    });
	} else if (this.invocation === "synchronous") {
	    return false;
	} else {
	    panic ();
	}
    };
    this.ready = function () {return 0 < this.inputQueue.length;};
function instantiate (component) {
    var runnable = new Runnable ();
    
    component.forEach
}
