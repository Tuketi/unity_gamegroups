#pragma strict

var madeCharacter : boolean = false;

function Start(){
	if (PlayerPrefs.HasKey("Char") && !madeCharacter){
		madeCharacter = true;
		var whichModel : String = PlayerPrefs.GetString("Char");
		var playerHolder : GameObject = GameObject.FindWithTag("playerCharacter");
		
		var character : GameObject = Instantiate(Resources.Load(whichModel)) as GameObject;
		
		character.transform.parent = playerHolder.transform;
		character.transform.position = Vector3(playerHolder.transform.position.x, playerHolder.transform.position.y, playerHolder.transform.position.z);
		character.tag = "charModel";
	}
}