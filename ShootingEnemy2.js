#pragma strict


var damp = 1;
var savedTime = 2;
var startFacing : String = "left";
var fireballSpeed : float = 750;

private var parentOffset : float = 0.5;


private var startTime : int;

function Start() {
	startTime=savedTime;
	if(startFacing=="left"){
		gameObject.transform.rotation.y = 0;
		parentOffset = -0.5;
	} else {
		gameObject.transform.rotation.y = 10;
	}
}

function Update () {
	
	
		//var rotate = Quaternion.LookRotation(LookAtTarget.position - transform.position);
		//transform.rotation = Quaternion.Slerp(transform.rotation, rotate, Time.deltaTime * damp);
		
		var seconds : int = Time.time;
		
		if (seconds == savedTime){
			Shoot(seconds);
		}
		
	
}

function Shoot(seconds){

		var bullet : GameObject = Instantiate(Resources.Load("bullet"))as GameObject;//2nd param is the emptygameobject (spawn point where it comes from)
		bullet.transform.parent=gameObject.transform;
		bullet.transform.position=Vector3(gameObject.transform.position.x + parentOffset, gameObject.transform.position.y, gameObject.transform.position.z);
		
		bullet.rigidbody.AddForce(-transform.right * fireballSpeed);

		//if(!bullet.renderer.isVisible){
			//Destroy(bullet);

		//}

		savedTime += startTime;

}