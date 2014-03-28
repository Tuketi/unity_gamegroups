var guiSkin : GUISkin;
var selectorCapsule : Transform;
var selectedButton : Texture;
private var currentPosition : int = 0;
private var whichLevel : String;

// Level select
function OnGUI(){
	if (GUI.Button(Rect(10,10,110,50), "1. Courtyard")){
		PlayerPrefs.SetString("Level", "level1");
	}
	if (GUI.Button(Rect(130,10,110,50), "2. Statue Hall")){
		PlayerPrefs.SetString("Level", "level2");
	}
	if (GUI.Button(Rect(250,10,110,50), "3. Dungeon")){
		PlayerPrefs.SetString("Level", "level3");
	}
	if (GUI.Button(Rect(370,10,110,50), "4. Bathroom Hall")){
		PlayerPrefs.SetString("Level", "level4");
	}
	if (GUI.Button(Rect(490,10,110,50), "5. Sewer")){
		PlayerPrefs.SetString("Level", "level5");
	}
	if (GUI.Button(Rect(10,70,110,50), "6. Wizard Room")){
		PlayerPrefs.SetString("Level", "level6");
	}
	if (GUI.Button(Rect(130,70,110,50), "7. Castle Room")){
		PlayerPrefs.SetString("Level", "level7");
	}
	if (GUI.Button(Rect(250,70,110,50), "8. Storage Hall")){
		PlayerPrefs.SetString("Level", "level8");
	}
	if (GUI.Button(Rect(370,70,110,50), "9. Ballroom")){
		PlayerPrefs.SetString("Level", "level9");
	}
	if (GUI.Button(Rect(490,70,110,50), "10. Throne Room")){
		PlayerPrefs.SetString("Level", "level10");
	}
}

// Character select
function Update(){
	if (Input.GetKeyDown(KeyCode.A)){
		if (currentPosition > 0){
			selectorCapsule.transform.position.x -= 2;
			currentPosition--;
		}
	}else if (Input.GetKeyDown(KeyCode.D)){
		if (currentPosition < 4){
			selectorCapsule.transform.position.x += 2;
			currentPosition++;
		}
	}else if (Input.GetKeyDown(KeyCode.Space)){ //choosing a character
		switch(currentPosition){
			case(0):
				PlayerPrefs.SetString("Char", "mage_prefab");
				PlayerPrefs.SetString("CharModel", "mage_CM");
				break;
			case(1):
				PlayerPrefs.SetString("Char", "knight_prefab");
				PlayerPrefs.SetString("CharModel", "knight_RB");
				break;
			case(2):
				PlayerPrefs.SetString("Char", "rogue_prefab");
				PlayerPrefs.SetString("CharModel", "rogue");
				break;
			case(3):
				PlayerPrefs.SetString("Char", "elemental_prefab");
				PlayerPrefs.SetString("CharModel", "elemental_AR");
				break;
			case(4):
				PlayerPrefs.SetString("Char", "dwarf_prefab");
				PlayerPrefs.SetString("CharModel", "dwarf_CC");
				break;
		}
		if (PlayerPrefs.HasKey("Level")){
			whichLevel = PlayerPrefs.GetString("Level");
		}else{
			whichLevel = "level1";
		}
		
		Application.LoadLevel(whichLevel);
	}
}