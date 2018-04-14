function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for(var i = 0;i < musicians.length; i++){
    band.push(musicians[i] + " plays " + instruments[i]);
  }
  return band;
}


function johnLennonFacts(facts){
  var allFacts = [];
  var i = 0;
  while(i<facts.length){
    allFacts.push(facts[i] + "!!!")
    i++
  }
  return allFacts;
}

function iLoveTheBeatles(num){
  var i = 0;
  var finalAnswer = [];
      do{
        finalAnswer.push("I love the Beatles!")
         i++;
      } while (i<num);
    return finalAnswer;
  }
}
