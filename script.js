const wrapper = document.getElementById("wrapper");
const myAssignment = document.getElementById("myAssignment");
const myAwnser = document.getElementById("myAwnser");
const feedback = document.getElementById("feedback");

let mySum;
let sound = new Audio();

function makeSum()
{
    let number_a = Math.floor((Math.random() * 9 ) + 1);
    let number_b = Math.floor((Math.random() * 9 ) + 1);

    mySum = number_a + " * " + number_b;

    myAssignment.innerHTML=mySum;
    myAwnser.focus();

}

function keyPressed(evt)
{
    if (evt.keyCode == 13)
    {
        if (eval(mySum) == myAwnser.value)
        {
            console.log("GOED HOOR, PRIMA");
            feedback.src = "img/goed.png";
            sound.src = "img/goed.wav";
            sound.play();
        }
        else
        {
            console.log("GVD FOUT");
            feedback.src = "img/fout.png";
            sound.src = "img/wrong.wav";
            sound.play();
        }
        window.setTimeout(waiting,2000);
    }
}

function waiting()
{
    feedback.src = "";
    myAwnser.value = "";
    makeSum();
}

makeSum();
myAwnser.addEventListener("keydown",keyPressed,false);