function print(){
        if (ties.length < 2) {
                document.getElementById("testResult").innerHTML = "You got " + answer + "!";
        }
        else {
                var tieOut = "You got a tie between ";
                for (var i = 0; i < ties.length - 1; i++) {
                        tieOut += ties[i] ;
                        tieOut += ", ";
                }
                var lastItem = ties.pop();
                tieOut += " and " + lastItem + ".";
                document.getElementById("testResult").innerHTML = tieOut;
        }
}
function check(){

        var questions = [
                {question: document.quiz.question1.value},
                {question: document.quiz.question2.value},
                {question: document.quiz.question3.value},
                {question: document.quiz.question4.value},
                {question: document.quiz.question5.value},
                {question: document.quiz.question6.value},
                {question: document.quiz.question7.value},
                {question: document.quiz.question8.value},
                {question: document.quiz.question9.value},
                {question: document.quiz.question10.value}
        ];
        for (var i = 0; i < questions.length; i++) {
                if (questions[i].question == "c#") {
                        languages[0].score++;
                } else if (questions[i].question == "java") {
                        languages[1].score++;
                } else if (questions[i].question == "php") {
                        languages[2].score++;
                } else if (questions[i].question == "ruby") {
                        languages[3].score++;
                }
        }
        for (var i = 0; i < languages.length; i++) {
                if(languages[i].score > topScore) {
                        answer = languages[i].language;
                        topScore = languages[i].score;
                }
        }
        for (var i = 0; i < languages.length; i++) {
                if(topScore == languages[i].score){
                        ties.push(languages[i].language);
                }
        }
        document.getElementById("testResult").style.visibility = "visible";
        print();
}
var languages = [
        {language: "C#", score: 0},
        {language: "Java", score: 0},
        {language: "PHP", score: 0},
        {language: "Ruby", score: 0}
];
var topScore = 0;
var answer;
var ties = [ ];
$(document).ready(function() {
});
