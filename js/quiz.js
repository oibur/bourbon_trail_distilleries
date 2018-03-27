var questions = [
  ['true or false? Bourbon must be made in Kentucky', 'false'],
  ['Bourbon can be distilled no higher than ___ proof', '160'],
  ['Unaged Bourbon is often called _____ dog, or _____ lightning', 'white'],
  ['Bourbon must be made from a mashbill of at least __% corn', '51'],
  ['true or false? Bourbon must be aged in a barrel', 'false'], //any oak CONTAINER (could be a box, or even a mug!)//
  ['Bottled in Bond Bourbon must be ___ proof', '100'],
  ['For Bourbon, the most common substitute for rye is _____', 'wheat'],
  ['__% of all Bourbon comes from Kentucky', '95'],
  ['true or false? There are more barrels of Bourbon than people in Kentucky', 'true'],
  ['___% of bourbon is whiskey', '100']
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function buildList(arr) {
 var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = "<h3><br>You got " + correctAnswers + "/10 questions right.<br>.</h3>"
html += '<h2>These are the questions you got right:</h2>';
html += buildList(correct);
html += '<h2>These are the questions I stumped you:</h2>';
html += buildList(wrong);
print(html);