const genel_container = document.querySelector(".genel-container");
const word = document.getElementById("word");
const guessField = document.getElementById("guess");
const kontrolButton = document.getElementById("kontrol");
const oyuncu = document.getElementById("oyuncu");
const scoreBoard = document.getElementById("scoreBoard");
const alert = document.getElementById("alert");
const words = getWords() // txt den gelicek
const ui = new UI();
const storage = new Storage();
let currentPlayerIndex; // oyuncunun indexi
const players = storage.getPlayersFromStorage();
let wortToBeGuessed;
document.addEventListener("DOMContentLoaded",function(e){
     //kim ile girdik oyuna kontrol
     const currentPlayer = storage.getCurrentPlayer();
     const nickNames = players.map(function(player){
         return player.nickName.toLowerCase();
     });
     // -1 ise yeni oyuncu farklı bir sey ise uzerıne yazıcaz
    currentPlayerIndex = nickNames.indexOf(currentPlayer);

    //oyuncuyu arraye ekle
    if(currentPlayerIndex < 0){//yeni oyuncu
     players.push(new Player(currentPlayer,0));
     //score ui
     ui.changeScore(scoreBoard,0);
    }else{ // var olan oyuncu
        //score ui
        ui.changeScore(scoreBoard,players[currentPlayerIndex].score);
    }
    //oyuncuyu ui ekle
    ui.addOyuncuToUI(oyuncu,currentPlayer);

    //ilk kelimeyi koy UI calıstır
    ui.changeWordText(word,getANewWord());
});
kontrolButton.addEventListener("click",function(e){
  //inputu al
  let input = guessField.value.trim().turkishToLower();
  console.log(wortToBeGuessed,input,wortToBeGuessed === input);
  if(input === wortToBeGuessed){
      if(currentPlayerIndex < 0){ //yeni oyuncu
        players[players.length - 1].score += 1;
        ui.changeScore(scoreBoard, players[players.length - 1].score);
      }else { //eski oyuncu
         players[currentPlayerIndex].score += 1;
         ui.changeScore(scoreBoard, players[currentPlayerIndex].score);
      }
      ui.showAlert(alert,"success","DOĞRU");
  }else {
    ui.showAlert(alert,"danger","YANLIŞ");
  }
  //kelimeyi değiş
  ui.changeWordText(word,getANewWord());

  //input alanı sıfırla
  guessField.value = "";

  //data guncelle
  storage.updatePlayers(players);
});
function getANewWord(){
    let index = Math.floor(Math.random()*words.length);
    wortToBeGuessed = words[index].trueForm;
    return words[index].mixedForm;
}
function getWords(){
 return [new Word("Klima")
 ,new Word("Kombi"),new Word("Televizyon"),new Word("Video kamera"),new Word("Bilgisayar"),
 new Word("Telefon"),new Word("araba")
 ,new Word("kutu"),new Word("muz"),new Word("kek"),new Word("kamyon")
 ,new Word("havuz"),new Word("simit"),new Word("dondurma"),new Word("hamburger"),
 new Word("pizza"),new Word("masa")
]

}
String.prototype.turkishToLower = function(){
  var string = this;
  var letters = { "İ": "i", "I": "ı", "Ş": "ş", "Ğ": "ğ", "Ü": "ü", "Ö": "ö", "Ç": "ç" };
  string = string.replace(/(([İIŞĞÜÇÖ]))+/g, function(letter){ return letters[letter]; })
  return string.toLowerCase();
}
