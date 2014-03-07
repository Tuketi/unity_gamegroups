var Delay = 3;


function OnTriggerEnter(other : Collider){
	if (other.gameObject.tag == "playerCharacter"){
		Debug.Log("About to Fall");
		renderer.material.color = Color.red;
		Destroy(gameObject,Delay);
	}
}