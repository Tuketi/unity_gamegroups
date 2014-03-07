
function OnTriggerEnter(other : Collider){
	if (other.gameObject.tag == "playerCharacter"){
		Debug.Log("dead");
		Destroy(other.gameObject);
	}
}