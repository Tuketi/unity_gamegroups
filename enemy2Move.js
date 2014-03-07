#pragma strict

var moveSpeed = 0;
var moveTime = 0.5;

private var willmove = 0;
private var rotAmt = 0;

function Start () {
	var diceRoll = Random.Range(1,2);
	if (diceRoll == 1){
		rotAmt = 180;
	}
	willmove = Random.Range(0,4);
	
	rotnow();
	movenow();
}

function Update () {
	
	transform.Translate(Vector3.left * moveSpeed / 4);

}

function rotnow(){
	transform.Rotate(0,rotAmt,0);

}

function movenow(){
	if (willmove == 3){
		moveSpeed = 1;
	}else{
		moveSpeed = 0;
	}
	wait();
	
}

function wait(){
	yield WaitForSeconds(moveTime);
	
	Start();

}

function OnCollisionEnter(collision: Collider){
	if (collision.gameObject.tag == "wall"){
		moveSpeed = 0;
	}
}