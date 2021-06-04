# box
  FACT box id nil
  FACT id color {green | yellow | red | RGBA}

# circle
  FACT circle id nil
  FACT id color {green | yellow | red | RGBA}
  
# line
	(diagrammatic synonym = arrow)
	FACT line id
	FACT line-id begins-at cirlce-id
	FACT line-id ends-at circle-id

	
# text
	FACT text id
	FACT text-id str "string"

# containment
	FACT id contains other-id
