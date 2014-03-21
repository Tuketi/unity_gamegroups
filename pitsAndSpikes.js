
function OnTriggerEnter(Trigger : Collider){
	if (Trigger.tag == "playerCharacter"){
		var playerInventory : playerController = Trigger.GetComponent(playerController);
	
		playerInventory.currentlyDying = true;
		playerInventory.lives--;
		
		Application.LoadLevel(Application.loadedLevelName);
		playerInventory.currentHealth = playerInventory.maxHealth;
		playerInventory.currentlyDying = false;
	}
}