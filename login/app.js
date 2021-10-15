const startButton = document.getElementById("startButton");
const nickNameField = document.getElementById("nickname");
const alert = document.getElementById("alert");
const storage = new Storage();

startButton.addEventListener("click",function(e){
    const input = nickNameField.value.trim();
    if(input === ""){
        startButton.href = "#";
        nickNameField.setAttribute("placeholder","Beni Bos Bırakma");
        nickNameField.style.border = "2px solid red";
    }else{
        nickNameField.style.border = "1px solid pink;";
        
        //kim ile girdik guncelle
        storage.setCurrentPlayer(input.toLowerCase());
        startButton.href = "/game/game.html";
    }
    nickNameField.value = "";
});