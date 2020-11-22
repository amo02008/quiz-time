start.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("quiz").style.visibility = "visible";
    document.getElementById("after_submit").style.visibility = "visible";
    
    
    
    // before event listener was added for start quiz, check function ran with total correct showing in p tag
    // document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";   


    function check() {

        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var correct = 0;

        if (question1 == "Brendan Eich") {
            correct++;
        }
        

        if (question2 == "ESLint") {
            correct++;
        }

        if (question3 == "just-in-time") {
            correct++;
        }

        if (question4 == "Float") {
            correct++;
        }
       
        


    }
}

// attempted to get score to show on screen in p tag
// after_submit.addEventListener("click", button);
// function myFunction () {
// document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
// }

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var twoMinutes = 60 * 2,
        display = document.querySelector('#time');
    startTimer(twoMinutes, display);
}
