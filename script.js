function check () {

    var q1 = document.quiz.question1.value;
    var q2 = document.quiz.question1.value;
    var q3 = document.quiz.question1.value;
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
 document.getElementById("after_submit").style.visibility = "visible";
 document.getElementById("number_correct").innerHTML = "You got" + correct + "correct.";

}