var readLine = require('readline-sync');

var score = 0;
var name;
var questionOne = {
  question:"What is the name of the first company where Sunil works?\n",
  answer:["LTI","Larsen and Tubro Infotech","LTIMindtree","lti"]
}
var questionTwo = {
  question:"What's the name of his Home City?\n",
  answer:["Udupi","Brahmavar"]
}
var questionThree = {
  question:"who is his favorite male cricketer?\n",
  answer:["Virat Kohli","virat","kohli"]
}
var questionFour = {
  question:"which ipl team does he support? \n",
  answer:["RCB","Royal Challengers Bangalore"]
}
var questions = [questionOne, questionTwo, questionThree, questionFour]

var topScorers = [{
  name:"Sunil",
  score:questions.length
}]

function welcome() {
name = readLine.question("Hello.. What's your name? \n");
console.log("\nHey there "+name+". Welcome to the Quiz App : HMYKS (How much you know Sunil)");
}

function play(question, answer) {
  var userAns = readLine.question("\n"+question);

  var ansFlag = 0;
  for(var i=0; i<answer.length;i++) {
  if (userAns.toLowerCase() == answer[i].toLowerCase()) {
    console.log("\nYayy!! That's correct ");
    score += 1;
    ansFlag = 1;
  }
  }
  if(ansFlag == 0) {
    console.log("\nOops!! It's a wrong answer");
    console.log("\nThe correct answer is \""+answer.join("\" or \"")+"\"");
  }

  console.log("\nCurrent Score: "+score);
  console.log("---------------------------------------------");
}

function start() {
  for(var i=0; i<questions.length; i++) {
    play(questions[i].question,questions[i].answer)
  }
}

function finalScore() {
  console.log("\nYour final score is "+score);

  topScorers.push({name:name,score:score});

  console.log("\nTOP SCORERS - ");
  var maxScore = 0;
  for(var i =0;i<topScorers.length;i++) {
    console.log(topScorers[i].name +" - "+topScorers[i].score)
    if(topScorers[i].score > maxScore) {
      maxScore = topScorers[i].score;
    }
  }

  if(score>=maxScore){
    console.log("\nWoah!! You are the new TOPSCORER.\nWell done.. You must be friends with Sunil.")
  }
  else if(score>=1){
    console.log("\nYou did better than the rest.")
  }

  console.log("\nThank you for playing!!!")
}

welcome()
start()
finalScore()