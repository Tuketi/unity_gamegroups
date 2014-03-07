#pragma strict

var moveSpeed = 1;


function Start () {
	transform.Rotate(0,180,0);
	
	wait();

}

function Update () {
	transform.Translate(Vector3.forward * moveSpeed/6);

}

function wait(){
	yield WaitForSeconds(0.5);
	
	gameObject.AddComponent("enemy2Move");
	
	Destroy(this);


}