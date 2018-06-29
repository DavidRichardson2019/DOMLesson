letterCounts = {};
wordCounts = {};
document.getElementById("countButton").onclick = function() {
  var typedText = document.getElementById("textInput").value.toLowerCase().replace(/[^a-z'\s]+/g, "");
  letters(typedText);
  words(typedText);
  Output();
}

function letters(typedText){
  for(let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    if(letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }
}

function words(typedText) {
  let words = typedText.split(/\s/);
  for(let i = 0; i < words.length; i++){
    currentWord = words[i];
    if(wordCounts[currentWord] === undefined){
      wordCounts[currentWord] = 1;
    }else {
      wordCounts[currentWord]++;
    }
  }
}


function Output() {
  let letterTitle = document.createElement("letterHead");
  letterTitle.innerHTML = "<h3>Letters:</h3>";
  document.getElementById("lettersDiv").appendChild(letterTitle);
  for(letter in letterCounts) {
    let letterP = document.createElement("letterP");
    letterP.innerHTML = "<strong>" + letter + ": </strong>" + letterCounts[letter] + ", ";
    document.getElementById("lettersDiv").appendChild(letterP);
  }
  let wordTitle = document.createElement("wordHead");
  wordTitle.innerHTML = "<h3>Words:</h3>";
  document.getElementById("wordsDiv").appendChild(wordTitle);
  for(word in wordCounts) {
    let wordP = document.createElement("wordP");
    wordP.innerHTML = "<strong>" + word + ": </strong>" + wordCounts[word] + ", ";
    document.getElementById("wordsDiv").appendChild(wordP);
 }
}
