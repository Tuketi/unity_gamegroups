var enemyModel : Transform;
var enemyType = 1;
var speed = 4;
var playerCharacter = GameObject.FindGameObjectWithTag("playerCharacter");

function Update(){

// Enemy that runs at the player & falls off edges
if (enemyType == 1){
	if (renderer.isVisible){
		rigidbody.velocity = transform.forward * speed;
		Physics.IgnoreCollision(playerCharacter.collider, collider);
	}

// Enemy that flies in a horizontal line back and forth
}else if (enemyType == 2){
	if (renderer.isVisible){
		transform.Translate(Vector3.forward * Time.deltaTime);
	}
}

} //end of Update()