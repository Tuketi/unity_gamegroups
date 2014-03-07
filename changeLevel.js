var whichLevelIsThis : float;
private var whichToGoTo : int;

function OnTriggerEnter(Trigger : Collider){
	if (Trigger.tag == 'playerCharacter'){
		Application.LoadLevel("level" + (whichLevelIsThis + 1));
	}
}