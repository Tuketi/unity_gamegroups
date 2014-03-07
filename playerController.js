/////////////////////////////////////////////////////////////////////////////
// HUD/GUI
public static var currentHealth = 3;
var maxHealth = 3;
var lives = 3;
var score : int = 0;
var keys : int = 0;
var healthPotion : int = 0;
var invincPotion : int = 0;


/////////////////////////////////////////////////////////////////////////////
// Taking damage / enemy collision
function OnCollisionEnter(hit: Collision){
	if (hit.gameObject.tag == "enemy"){
		currentHealth = currentHealth - 1;
	}
	if (currentHealth < 1){
		lives = lives - 1;
	}
}

/////////////////////////////////////////////////////////////////////////////
// Movement control
var speed : float = 10;
var jumpSpeed : float = 12;
var attackRange : float = 50;
var newModel;
var rotatedMove : boolean = false;

private var currentlyFalling : boolean = false;
private var distancetoGround : float;
private var jumpDelay : boolean = false;
private var currentlyJumping : boolean = false;

function Start(){
	newModel.transform.parent = gameObject.transform;
	
	distancetoGround = gameObject.collider.bounds.extents.y;
	
	if (PlayerPrefs.GetString("Level") == "level10"){
		rotatedMove = true;
	}
}

function Update(){
		// x axis movement
		if (Input.GetKey(KeyCode.A)){
			if (rotatedMove){
				transform.rotation.y = -100;
			}else{
				transform.rotation.y = -0.7;
			}
			transform.position += Vector3.left * Time.deltaTime * speed;
			if (currentlyJumping == false){
				//newModel.animation.Play("Walk");
			}
		}else if (Input.GetKey(KeyCode.D)){
			if (rotatedMove){
				transform.rotation.y = 0.3;
			}else{
				transform.rotation.y = 0.7;
			}
			transform.position += Vector3.right * Time.deltaTime * speed;
			if (currentlyJumping == false){
				//newModel.animation.Play("Walk");
			}
		}
	
	// attacking
	if (Input.GetKey(KeyCode.K)){
		Attack();
	}
	
	if (Input.anyKey == false && currentlyJumping == false){
		//newModel.animation.Play("Idle");
	}
	
	if (!currentlyFalling){
		if (Input.GetKey(KeyCode.Space)){
			rigidbody.velocity.y += jumpSpeed;
			currentlyFalling = true;
		}	
	}
}

function FixedUpdate(){
	if (currentlyFalling){
		rigidbody.velocity += gravity * Time.deltaTime;
	}
	//rigidbody.Move(velocity * Time.deltaTime);
}
	
// Attacking
	function Attack(){
	//newModel.animation.Play("Attack");
		
			var hit : RaycastHit;
			if (Physics.Raycast(transform.position, transform.right, hit, attackRange) && hit.transform.tag == "enemy"){
				Destroy(hit.collider.gameObject);
			}else if(Physics.Raycast(transform.position, -transform.right, hit, attackRange) && hit.transform.tag == "enemy"){
				Destroy(hit.collider.gameObject);
			}

	}

function OnCollisionStay(collisionInfo : Collision){
	currentlyFalling = false;
}