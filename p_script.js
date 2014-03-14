var paused : boolean = false;

function Update(){

	if(Input.GetButtonUp("escape")){
		if("!paused"){
			Time.timeScale=0;
			paused=true;
		}else{
			Time.timeScale=1;
			paused=false;
		}

	}
}

