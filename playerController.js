﻿/////////////////////////////////////////////////////////////////////////////
// HUD/GUI
public static var currentHealth = 3;
public static var maxHealth = 3;
public static var lives = 3;
public static var score : int = 0;
public static var keys : int = 0;
public static var healthPotion : int = 0;
public static var invincPotion : int = 0;

var deathTexture : Texture;

private var gravity = Vector3 (0,-9.81 ,0);


/////////////////////////////////////////////////////////////////////////////
// Movement control
var speed : float = 10;
var jumpSpeed : float = 4;
var attackRange : float = 50;
var bounceHeight : float = 5;
var newModel;
var rotatedMove : boolean = false;

private var currentlyFalling : boolean = false;
private var distancetoGround : float;
private var jumpDelay : boolean = false;
private var currentlyJumping : boolean = false;

function Start(){
	var modelName : String = PlayerPrefs.GetString("Char") + "(Clone)";
	var modelChild : String = PlayerPrefs.GetString("CharModel");
	newModel = transform.Find(modelName + "/" + modelChild);
	newModel.transform.parent = gameObject.transform;
	
	distancetoGround = gameObject.collider.bounds.extents.y;
	
	if (PlayerPrefs.GetString("Level") == "level10"){
		rotatedMove = true;
	}
}

/////////////////////////////////////////////////////////////////////////////
// Taking damage / enemy collision
function OnCollisionEnter(hit: Collision){
	if (hit.gameObject.tag == "enemy" && !currentlyFalling){
		currentHealth = currentHealth - 1;
		injuryWait();
	}else if (hit.gameObject.tag == "enemy" && currentlyFalling){
		Destroy(hit.collider.gameObject);
		rigidbody.velocity.y += bounceHeight;
	}
	if (currentHealth < 1){
		if (lives <= 0){
			killDude();
		}else{
			lives = lives - 1;
			killDude();
		}
	}
}

function injuryWait(){
	yield WaitForSeconds(2);
}

function killDude(){
	GUI.DrawTexture(Rect(Screen.width/2, Screen.height/2, Screen.width/2 + 50, Screen.height/2 + 100), deathTexture, ScaleMode.ScaleToFit);
	Time.timeScale = 0;
	Application.LoadLevel(1);
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
			if (!currentlyFalling){
				newModel.animation.Play("Walk");
			}
		}else if (Input.GetKey(KeyCode.D)){
			if (rotatedMove){
				transform.rotation.y = 0.3;
			}else{
				transform.rotation.y = 0.7;
			}
			transform.position += Vector3.right * Time.deltaTime * speed;
			if (!currentlyFalling){
				newModel.animation.Play("Walk");
			}
		}
		
	// idle / standing still
	if (Input.anyKey == false && newModel.animation["Attack"].enabled == false 
			&& newModel.animation["Take off"].enabled == false && newModel.animation["Falling"].enabled == false){
		newModel.animation.CrossFade("Idle");
	}
	
	// attacking
	if (Input.GetKeyDown(KeyCode.K)){
		Attack();
	}
	
	if (!currentlyFalling){
		if (Input.GetKey(KeyCode.Space)){
			newModel.animation.CrossFade("Falling");
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
			newModel.animation.Play("Attack");
			
			var hit : RaycastHit;
			if (Physics.Raycast(transform.position, transform.forward, hit, attackRange) && hit.transform.tag == "enemy"){
				Destroy(hit.collider.gameObject);
			}else if (Physics.Raycast(transform.position, -transform.forward, hit, attackRange) && hit.transform.tag == "enemy"){
				Destroy(hit.collider.gameObject);
			}else if (Physics.Raycast(transform.position, transform.right, hit, attackRange) && hit.transform.tag == "enemy"){
				Destroy(hit.collider.gameObject);
			}else if (Physics.Raycast(transform.position, -transform.right, hit, attackRange) && hit.transform.tag == "enemy"){
				Destroy(hit.collider.gameObject);
			}
			
	}

function OnCollisionStay(collisionInfo : Collision){
	currentlyFalling = false;
	newModel.animation.CrossFade("Idle");
}