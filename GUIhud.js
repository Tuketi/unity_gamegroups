var jewelTexture : Texture;
var heartFull : Texture;
var heartOneGone : Texture;
var heartTwoGone : Texture;
var hpotTexture : Texture;
var playerLives : Texture;
var deathTexture : Texture;

var hudSkin : GUISkin;

private var playerStats : playerController;

function Start(){
	playerStats = gameObject.GetComponent(playerController);
}

function OnGUI(){
	GUI.skin = hudSkin;

	xPosition = Screen.width;
	yPosition = Screen.height;

	GUI.DrawTexture(Rect(xPosition*.75, yPosition*.03, 120, 60), jewelTexture, ScaleMode.ScaleToFit);
	GUI.Label(Rect(xPosition*.765, yPosition*-.04, 120, 100), "" + playerStats.score);
	
	GUI.DrawTexture(Rect(xPosition*.02, yPosition*.01, 120, 70), playerLives, ScaleMode.ScaleToFit);
	GUI.Label(Rect(xPosition*.15, yPosition*-.05, 120, 100), "" + playerStats.lives);
	
	//GUI.DrawTexture(Rect(xPosition*.2, yPosition*.4, xPosition*.2, yPosition*.4), hpotTexture, ScaleMode.ScaleToFit);
	
	if (playerStats.currentlyDying){
		GUI.DrawTexture(Rect(xPosition*.45, yPosition*.2, 200, 193), deathTexture, ScaleMode.ScaleToFit);
	}
	
	if (playerStats.currentHealth == 3){
		GUI.DrawTexture(Rect(xPosition*.25, yPosition*.08, 120, 36), heartFull, ScaleMode.ScaleToFit);
	}else if (playerStats.currentHealth == 2){
		GUI.DrawTexture(Rect(xPosition*.25, yPosition*.08, 120, 36), heartOneGone, ScaleMode.ScaleToFit);
	}else if (playerStats.currentHealth == 1){
		GUI.DrawTexture(Rect(xPosition*.25, yPosition*.08, 120, 36), heartTwoGone, ScaleMode.ScaleToFit);
	}
	
}