var seconds = 1000;
var timer;
$('#time').text(seconds);

function startTimer(){
    seconds = seconds - 1;
    $('#time').text(seconds);
    if (seconds <= 0) {
        // @dev hide startscreen and questions
        $('#startscreen').addClass('hide');
        $('#questions').addClass('hide');


        clearInterval(timer);
        $('#results').removeClass('hide');
        seconds = 0;
        $('#time').text(seconds);
    }
}

$('#start-btn').on('click', function(){
    timer = setInterval(startTimer, 1000); //->
    debugger;
    $('#startscreen').addClass('hide');
    $('#questions').removeClass('hide'); //-|
    $('#time').removeClass('hide'); //-|
});

$('#submit').on('click', function() {
    clearInterval(timer);
    $('#results').removeClass('hide');
    $('#questions').addClass('hide');

    var correct = 0;
    var wrong = 0;
    var unanswered = 0;

    $('#correctAnswers').text(correct);
    $('#wrongAnswers').text(wrong);
    $('#unanswered').text(unanswered);

})

var questions = [{
    name: "highestPaidActor",
    q: "Who was the highest paid actor in 2017?",
    a: ["Dwayne Johnson", "Mark Wahlberg", "Tom Cruise", "Robert Downey Jr."],
    correct: "Mark Wahlberg",
},
{
    name: "manOnFire",
    q: "What year was Man On Fire released?",
    a: ["2015", "1999", "2004", "2007"],
    correct: "2004",
},
{
    name: "highestGrossing",
    q: "What is the highest grossing movie of all time?",
    a: ["Avengers: Infinity War", "Star Wars: The Force Awakens", "Avatar", "Titanic"],
    correct: "Avatar",
},
{
    name: "xmen",
    q: "How many X-Men movies are there?",
    a: ["5", "8", "9", "11"],
    correct: "11",
},
{
    name: "toyStory",
    q: "Woody and Buzz Lightyear are two of Andy’s toys. Who is the next door neighbor that Andy’s toys fear?",
    a: ["Sid", "Rex", "George", "Slinky"],
    correct: "Sid",
},
{
    name: "indianaJones",
    q: "What specific creature does Indiana Jones hate?",
    a: ["Scorpions", "Snakes", "Spiders", "Beetles"],
    correct: "Snakes",
},
{
    name: "armageddon",
    q: "Who detonates the nuclear weapon that destroys the asteroid in Armageddon?",
    a: ["Ben Affleck", "Owen Wilson", "Liv Tyler", "Bruce Willis"],
    correct: "Bruce Willis",
},
{
    name: "hakunaMatata",
    q: "What is the meaning of Hakuna Matata?",
    a: ["No Worries", " Why even bother?", "Eat, drink, and be merry", "Have mercy"],
    correct: "No Worries",
},
{
    name: "rocky",
    q: "Part of Rocky’s training is punching the sides of frozen meat of what animal?",
    a: ["Horse", "Cow", "Pig", "Bison"],
    correct: "Cow",
},
{
    name: "tomHanks",
    q: "Which Tom Hanks movie won the Academy Award for Best Picture in 1994?",
    a: ["The Green Mile", "Apollo 13", "Forrest Gump", "Saving Private Ryan"],
    correct: "Forrest Gump",
}
]

var div, question_text, paragraph, answer;
for (var index in questions){
    question_text = questions[index].q;
    var div = $('<div>');
    paragraph = $('<p>');
    answer =  $('<button>');
    answer_text = questions[index].a;
    paragraph.text(question_text);
    answer.text(answer_text);

    div.append(paragraph);
    div.append(answer);
    
    $('#questionslist').append(div);
}
