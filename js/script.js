$(document).ready(function(){

  //questions and possible ingredients with flavor id which is currently unused
  var currentQuestion = -1;
  var questions = [
    { question:"do you want it salty?",
      ingredients:["salt", "olive"],
      flavor: "salty"
    },
    { question: "do you like it sweet?",
      ingredients:["sugar", "honey","agave nectar","maple syrup"],
      flavor: "sweet"
    },
    { question: "do you like it strong?",
      ingredients:["vodka","rum","whiskey"],
      flavor: "strength"
    },
    { question: "do you like fruits?",
      ingredients:["orange","cherry","lime"],
      flavor: "fruity"
    }
  ];

  //Array to build the pref. cocktail
  var drinkPref = [];

  //redundant function for test purpose
  function askQuestion(){
    $('.question').html(questions[currentQuestion].question);
  }

  function nextQuestion(){
    console.log(questions.length);
    console.log(currentQuestion);
    if(currentQuestion >= questions.length-1){
      $('.question').html("It seems you would like a drink with " + drinkPref);
    } else {
      currentQuestion++;
    askQuestion();
    }
  }
  $('#testClick').on('click', function(){
    currentQuestion++;
    askQuestion();
  });
  $('.yesBtn').on('click', function(){
   drinkPref.push(questions[currentQuestion].ingredients[Math.floor(Math.random() * (questions[currentQuestion].ingredients.length))]);
    nextQuestion();
  });
  $('.noBtn').on('click', function(){
    if(currentQuestion>=0){
      nextQuestion();
    }
  });
  $('.indifBtn').on('click', function(){
    drinkPref.push(questions[currentQuestion].ingredients[Math.floor(Math.random() * (questions[currentQuestion].ingredients.length))]);
    nextQuestion();
  });
});
