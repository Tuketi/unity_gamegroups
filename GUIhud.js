var jewelTexture : Texture;
var heartFullTexture : Texture;
var hpotTexture : Texture;

private var playerStats : playerController = gameObject.GetComponent(playerController);

function OnGUI(){
	xPosition = Screen.width;
	yPosition = Screen.height;

	GUI.DrawTexture(Rect(xPosition*.65, yPosition*.03, xPosition*.65, yPosition*.03), jewelTexture, ScaleMode.ScaleToFit);
	GUI.Label(Rect(xPosition*.95, yPosition*.03, xPosition*.95 + 10, yPosition*.03 + 10), "" + playerStats.score);
	
	GUI.DrawTexture(Rect(xPosition*.2, yPosition*.4, xPosition*.2, yPosition*.4), hpotTexture, ScaleMode.ScaleToFit);
	
	GUI.DrawTexture(Rect(xPosition*.02, yPosition*.03, xPosition*.02, yPosition*.03), heartFullTexture, ScaleMode.ScaleToFit);
	
	GUI.Label(Rect(10,100,100,20), "lives: " + playerStats.currentHealth);
	GUI.Label(Rect(10,130,100,20), "health: " + playerStats.maxHealth);
}