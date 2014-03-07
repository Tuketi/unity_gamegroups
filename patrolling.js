    #pragma strict
     
 	var leftRight = 1.0;
	var down = 0;
    var speed = 0.5;
     
    function Start() {
    Cycle();
    }
     
    function Cycle() {
    var dest = transform.position;
    while (true) {
    dest.x += leftRight;
    while (transform.position != dest) {
    transform.position = Vector3.MoveTowards(transform.position, dest, speed * Time.deltaTime);
    yield;
    }
     
    dest.y -= down;
     
    while (transform.position != dest) {
    transform.position = Vector3.MoveTowards(transform.position, dest, speed * Time.deltaTime);
    yield;
    }
     
    dest.x -= leftRight;
	gameObject.transform.rotation.y = -0.7;
     
    while (transform.position != dest) {
    transform.position = Vector3.MoveTowards(transform.position, dest, speed * Time.deltaTime);
    yield;
    }
	gameObject.transform.rotation.y = 0.7;
     
    dest.y -= down;
     
    while (transform.position != dest) {
    transform.position = Vector3.MoveTowards(transform.position, dest, speed * Time.deltaTime);
    yield;
    }
    }
    }