#pragma strict

function Start(){
	yield waitIntro(10.0);
}

function waitIntro(delay : float){
	var timer = Time.time + delay;
    while (Time.time < timer){
        yield;
    }
	
	Application.LoadLevel("selection");
}