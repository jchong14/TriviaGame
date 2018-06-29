var seconds = 5;
var timer;
var correct = 0;
var wrong = 0;
var unanswered = 0;
$('#time').text(seconds);

function startTimer(){
    seconds = seconds - 1;
    $('#time').text(seconds);
    if (seconds <= 0) {
        // @dev hide startscreen and questions
        $('#questions').addClass('hide');

        clearInterval(timer);
        $('#results').removeClass('hide');
        seconds = 0;
        $('#time').text(seconds);
    
        if($("#Mark_Wahlberg").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
        if($("#2004").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
        if($("#Avatar").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
        if($("#11").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
        if($("#Sid").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
        if($("#Snakes").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
        if($("#Bruce_Willis").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
        if($("#No_Worries").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
        if($("#Cow").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
        if($("#Forrest_Gump").is(':checked')) {
            correct++;
        }
        else {
            wrong++;
        }
    
        $('#correctAnswers').text(correct);
        $('#wrongAnswers').text(wrong);
    }
}

$('#start-btn').on('click', function(){
    timer = setInterval(startTimer, 1000); 
    $('#startscreen').addClass('hide');
    $('#questions').removeClass('hide'); 
    $('#time').removeClass('hide');
});

$('#submit').on('click', function() {
    clearInterval(timer);
    $('#results').removeClass('hide');
    $('#questions').addClass('hide');

    console.log($("#11").is(':checked'))
 
    if($("#Mark_Wahlberg").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }
    if($("#2004").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }
    if($("#Avatar").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }
    if($("#11").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }
    if($("#Sid").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }
    if($("#Snakes").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }
    if($("#Bruce_Willis").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }
    if($("#No_Worries").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }
    if($("#Cow").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }
    if($("#Forrest_Gump").is(':checked')) {
        correct++;
    }
    else {
        wrong++;
    }

    $('#correctAnswers').text(correct);
    $('#wrongAnswers').text(wrong);
})

var questions = [{
    q: "1. Who was the highest paid actor in 2017?",
    answers: {
        a: "Dwayne Johnson", b: "Mark_Wahlberg", c: "Tom Cruise", d: "Robert Downey Jr.",
    },
    correct: "Mark Wahlberg",
    name: "Mark Wahlberg",
},
{
    q: "2. What year was Man On Fire released?",
    answers: { 
        a: "2015", b: "1999", c: "2004", d: "2007",
    },
    correct: "2004",
    name: "2004",
},
{
    q: "3. What is the highest grossing movie of all time?",
    answers: {
        a: "Avengers: Infinity War", b: "Star Wars: The Force Awakens", c: "Avatar", d: "Titanic",
    },
    correct: "Avatar",
    name: "Avatar",
},
{
    q: "4. How many X-Men movies are there?",
    answers: {
        a: "5", b: "8", c: "9", d: "11",
    },
    correct: "11",
    name: "11",
},
{
    q: "5. Woody and Buzz Lightyear are two of Andy’s toys. Who is the next door neighbor that Andy’s toys fear?",
    answers: {
        a: "Sid", b: "Rex", c: "George", d: "Slinky",
    },
    correct: "Sid",
    name: 'Sid',
},
{
    q: "6. What specific creature does Indiana Jones hate?",
    answers: {
        a: "Scorpions", b: "Snakes", c: "Spiders", d: "Beetles",
    },
    correct: "Snakes",
    name: "Snakes"
},
{
    q: "7. Who detonates the nuclear weapon that destroys the asteroid in Armageddon?",
    answers: {
        a: "Ben Affleck", b: "Owen Wilson", c: "Liv Tyler", d: "Bruce_Willis",
    },
    correct: "Bruce Willis",
    name: "Bruce Willis",
},
{
    q: "8. What is the meaning of Hakuna Matata?",
    answers: {
        a: "No_Worries", b: " Why even bother?", c: "Eat, drink, and be merry", d: "Have mercy",
    },
    correct: "No Worries",
    name: "No Worries",
},
{
    q: "9. Part of Rocky’s training is punching the sides of frozen meat of what animal?",
    answers: {
        a: "Horse", b: "Cow", c: "Pig", d: "Bison",
    },
    correct: "Cow",
    name: "Cow",
},
{
    q: "10. Which Tom Hanks movie won the Academy Award for Best Picture in 1994?",
    answers: {
        a: "The Green Mile", b: "Apollo 13", c: "Forrest_Gump", d: "Saving Private Ryan",
    },
    correct: "Forrest Gump",
    name: "Forrest Gump",
}
]

var div, question_text, paragraph;
for (var index in questions){
    question_text = questions[index].q;
    var div = $('<div>');
    paragraph = $('<p>');
    paragraph.text(question_text);
    div.append(paragraph);
    $('#questionslist').append(div);

    for (letter in questions[index].answers){
        choices = questions[index].answers[letter];
        var createChoices = $('<input type="radio" name="'+ questions[index].name +'" id="'+ choices +'"><label></label>');
        createChoices.text(choices);
        $('#questionslist').append(createChoices);
    }   
}







