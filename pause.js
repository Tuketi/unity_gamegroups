#pragma strict

var paused : boolean = false;
var pausedGUI : GUITexture;
pausedGUI.enabled = false;


function Start () {
	if(Input.GetKeyUp("P")){
		if (paused == true){
			paused = false;
		} else {
			paused = true;
		}
		
		
		if(paused == true){
			Time.timeScale = 0.0;
			pausedGUI.enabled = true;
		} else {
			Time.timeScale = 1.0;
			pausedGUI.enabled = false;
		}
	}

}

function Update () {
    if (Input.GetKeyDown (KeyCode.Escape)){
    Application.LoadLevel(1);// load the level that needs to be, or the script reference
    }
    }

