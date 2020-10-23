let database = [
  ["Memento", "I am a movie that tattoed my past all over my body"],
  ["Switzerland", "I am heaven on earth located in Europe, you can find place that Charlie visited over there"],
  ["Holland", "Below the sea but not drowing"],
  ["Indian","Native American"],
  ["Retinol", "I am a vitamin A derivative that makes you look 10 years younger"],
  ["Juxtaposition", "Act or an instance of placing two or more things side by side often to compare or contrast or to create an interesting effect"],
  ["adduce", "to offer as example, reason, or proof in discussion or analysis"],
  ["Machinery", "something used to achieve an end"],
  ["maintenance", "the act or activity of keeping something in an existing and usually satisfactory condition"],
  ["mystified", "to throw into a state of mental uncertainty"],
  ["Abecedarian", "of or relating to the simplest facts or theories of a subject"],
  ["abbreviate", "to make less in extent or duration"],
  ["awakening", "as in stimulating, invigorating"],
  ["backcountry", "a rural region that forms the edge of the settled or developed part of a country"],
  ["balustrade", "a protective barrier consisting of a horizontal bar and its supports"],
  ["balmy", "having or showing a very abnormal or sick state of mind"],
  ["caddy", "a covered rectangular container for storing or transporting things"],
  ["cybercitizen", "an active participant in the online community of the Internet"],
  ["cyclonic", "marked by bursts of destructive force or intense activity"],
  ["damsel", "a young unmarried woman"],
  ["dastard", "a person who shows a shameful lack of courage in the face of danger"],
  ["dangerous", "involving potential loss or injury"],
  ["earthborn", "having to do with life on earth especially as opposed to that in heaven"],
  ["Easygoing", "having a relaxed, casual manner"],
  ["edible", "suitable for use as food"],
  ["fabricate", "to bring into being by combining, shaping, or transforming materials"],
  ["Factory", "a building or set of buildings for the manufacturing of goods"],
  ["furtherance", "forward movement in time or place"],
  ["gabble", "unintelligible or meaningless talk"],
  ["hysterical", "causing or intended to cause laughter"],
  ["itinerary", "a document in which the places you go to or plan to go to on a journey are listed"],
  ["juvenile", "being in the early stage of life, growth, or development"],
  ["kidney", "a number of persons or things that are grouped together because they have something in common"],
  []]

     

//====================================================================


let index = Math.floor(Math.random()*database.length)
let word = database[index][0]
let container = []
let substractLife = 0
let substractHint = 0


//====================================================================

function displayWord(){
  let output = ''
  for (let i = 0; i < word.length; i++){
    container.push("_ ")
  }
  for (let i = 0; i < word.length; i++){
    output += '_ '
  }
  document.getElementById("word").innerHTML = output
  document.getElementById("desc").innerHTML = `<cite>${database[index][1]}</cite>`
}

//=====================================================================


function getLives() {
  let lifes = 2-substractLife
  document.getElementById("lives").innerHTML = `Lives = ${lifes}`
  return lifes
}

//====================================================================

function getHint(){
  let hints = 2 - substractHint
  document.getElementById("hint").innerHTML = `Hints = ${hints}`
  return hints
}

//=====================================================================

function checkChar (char){
  for (i = 0; i < word.length; i++){
    if (char === word[i].toLowerCase()){
      return true
    }
  }
  return false
}

//====================================================================


function getWordHint(){

  let result = ''
  let index = 0

  while (container[index] != "_ "){
    index = Math.floor(Math.random() * word.length)
  }
  container[index] = word[index]

  for (let j = 0; j < container.length; j++){
    result += container[j]
  }
  document.getElementById("word").innerHTML = result
  }

//====================================================================

function isWin(){
  for (let i = 0; i < container.length; i++){
    if (container[i] === "_ "){
      return false
    }
        }
  return true
}

//====================================================================


function changeGame(){
  let char = document.getElementById("guessedChar").value.toLowerCase()
  let result = ''
  let isChar = checkChar(char)

  if (isChar === true && isWin() === false){
    for (let i = 0 ; i < word.length; i++){
    if (char === word[i].toLowerCase()){
      container[i] = word[i]
    }
    }

    for (let j = 0; j < container.length; j++){
      result += container[j]
    }
        
    if (isWin()=== false){
      document.getElementById("word").innerHTML = result
    }
    else{
      document.getElementById("word").innerHTML = result
      location.replace("./winnercat.html")
    }
  }
  else if (char !== "!"){
    if (getLives() > 0){
      substractLife++
      getLives()
    }
    else {
      location.replace("./lost.html")
    }
  }
  else if (char === "!"){
    if (getHint() > 0) {
      substractHint ++
      getHint()
      getWordHint()
    }
    else {
      document.getElementById("hint").innerHTML = "Oops you're out of hints"
    }
  }


  document.getElementById("guessedChar").value = ""

}

//====================================================================

function goToHome (){
  location.replace("./index.html")
  
}

//====================================================================

function goToGame (){
  location.replace("./game.html")
  let name = document.getElementById('name');
	localStorage.setItem("name",name.value);
  
}

//====================================================================

function getLoadLose(){
  if (typeof(Storage) !== "undefined") {
    let nama = localStorage.getItem('name');
    document.getElementById('lose').innerHTML = `Oops, ${nama}. You lose!!`;
  }
  
}

function getLoadWin(){
  if (typeof(Storage) !== "undefined") {
    let nama = localStorage.getItem('name');
    document.getElementById('win').innerHTML = `Congrats, ${nama}. You win!!`;
  }
  
}
