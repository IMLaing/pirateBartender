$(document).ready(function(){
  //Single State Object
  var state = {
    currentQuestion: 0,
    nextQuestion: function() {
      if(this.currentQuestion >= questions.length-1) {
        this.drinkNaming();
        $('.question').html("It seems you would like a drink with " + this.drinkPref + " that would be a " + this.drinkName);
        $('.responses').hide();
        $('#startOver').show();
      } else {
        this.currentQuestion++;
        askQuestion();
      }
    },
    drinkPref: [],
    drinkName: '',
    drinkNaming: function() {
      var word = pirateWords[Math.floor(Math.random() * pirateWords.length)];
      var adjective = pirateAdjectives[Math.floor(Math.random() * pirateAdjectives.length)];
      this.drinkName = adjective +'-'+ word;
    }
  };

  var BartenderQuestion = function(question, ingred, flavor){
      this.question = question;
      this.ingredients = ingred;
      this.flavor = flavor;
  };

  var questions = [
      new BartenderQuestion("do you want it salty?",["salt", "olive"],"salty"),
      new BartenderQuestion("do you like it sweet?",["sugar", "honey","agave nectar","maple syrup"],"sweet"),
      new BartenderQuestion("do you like it strong?",["vodka","rum","whiskey"],"strength"),
      new BartenderQuestion("do you like fruits?",["orange","cherry","lime"],"fruity"),
      ];

  var pirateWords = ['anchor', 'assault', 'boatswain', 'cannon', 'deck hand', 'flotsam'];
  var pirateAdjectives = ['ahoy', 'barbaric', 'dangerous', 'escaping', 'hooked'];

    //render
  function askQuestion(){
    $('.question').html(questions[state.currentQuestion].question);
  }
  

 //EVENT LISTNERS 
  $('#startOver').hide();
  askQuestion();

  $('#startOver').on('click', function(){
    state.currentQuestion = 0;
    state.drinkPref = [];
    $('.responses').show();
    $('#startOver').hide();
    askQuestion();
  });

  $('.yesBtn').on('click', function(){
    state.drinkPref.push(questions[state.currentQuestion].ingredients[Math.floor(Math.random() * (questions[state.currentQuestion].ingredients.length))]);
    state.nextQuestion();
    console.log(state.drinkPref);
  });

  $('.noBtn').on('click', function(){
    if(state.currentQuestion>=0){
      state.nextQuestion();
    }
  });

  $('.indifBtn').on('click', function(){
    state.drinkPref.push(questions[state.currentQuestion].ingredients[Math.floor(Math.random() * (questions[state.currentQuestion].ingredients.length))]);
    state.nextQuestion();
  });

  console.log(questions[state.currentQuestion]);
});

/*
State or Controller (kinda)
var app = {...}

Dom or View 
render()

$doc.ready

*/