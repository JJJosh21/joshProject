
 function load(){
    window.alert("You have eatan all my chicken");
 }
var Uscore = 101;

var highscore = 100;

var press = function () {
    Uscore--;
    document.getElementById('score').innerHTML = "Your Score: " + Uscore;
    if (Uscore > highscore) {
        document.getElementById('hiscore').innerHTML = "New Highscore: " + Uscore;
        return;

}
};
var Level = 1;

function Cheese() {
	if (Uscore < 1) {
		window.alert("You have killed Scrump");
	}
}

$('#imgone').click(function(){
    //do w.e
});





