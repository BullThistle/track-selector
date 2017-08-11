function check(){
        var question1 = document.quiz.question1.value;
        var question2 = document.quiz.question2.value;
        var question3 = document.quiz.question3.value;
        var question4 = document.quiz.question4.value;
        var languages = [
                {language: "C#", score: 0},
                {language: "Java", score: 0},
                {language: "PHP", score: 0},
                {language: "Ruby", score: 0}
        ];
        var topScore = 0;
        var answer;
        var ties = [ ];

        if (question1 == "c#") {
                languages[0].score++;
        } else if (question1 == "java") {
                languages[1].score++;
        } else if (question1 == "php") {
                languages[2].score++;
        } else if (question1 == "ruby") {
                languages[3].score++;
        }

        if (question2 == "c#") {
                languages[0].score++;
        } else if (question2 == "java") {
                languages[1].score++;
        } else if (question2 == "php") {
                languages[2].score++;
        } else if (question2 == "ruby") {
                languages[3].score++;
        }

        if (question3 == "c#") {
                languages[0].score++;
        } else if (question3 == "java") {
                languages[1].score++;
        } else if (question3 == "php") {
                languages[2].score++;
        } else if (question3 == "ruby") {
                languages[3].score++;
        }

        if (question4 == "c#") {
                languages[0].score++;
        } else if (question4 == "java") {
                languages[1].score++;
        } else if (question4 == "php") {
                languages[2].score++;
        } else if (question4 == "ruby") {
                languages[3].score++;
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

        document.getElementById("result").style.visibility = "visible";
        if (ties.length < 2) {
                document.getElementById("testResult").innerHTML = "You got" + answer + "!";
        }
        else {
                document.getElementById("testResult").innerHTML = "Yout got a tie!";
        }


}
