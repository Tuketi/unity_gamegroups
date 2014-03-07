
function OnTriggerEnter(Trigger : Collider){
	if (Trigger.tag == 'playerCharacter'){
		var playerInventory : playerController = Trigger.GetComponent(playerController);
		
		if (gameObject.tag == "healthPotion"){
			Debug.Log("here");
			playerInventory.currentHealth++;
			// playerInventory = variable we set above that references the inventory script
			// .healthPotions = the variable from the inventory script called healthPotions
			// increases the variable by one
			
			// references the inventory script
			// adds one health potion
		}else if (gameObject.tag == "jewel"){
			playerInventory.score++;
			// jewel things
			// jewels++;
			// if statement to check if jewels == 100
			// if it does, add one to lives; reset jewels to 0
			
			// update the GUI script and increase the jewels variable by one
		}else if (gameObject.tag == "invincibilityPotion"){
			// invincibility stuff
			// add one invincibility potion to inventory script variable
		}
	
		Destroy(gameObject);
	}
}