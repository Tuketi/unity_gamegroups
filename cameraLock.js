var target : Transform;
var distance = 5;
var height = 2;

function Update(){
	transform.position.z = target.position.z - distance;
	transform.position.y = target.position.y + height;
	transform.position.x = target.position.x;
	transform.rotation = Quaternion.Euler(Vector3(2, 0, 0));
}