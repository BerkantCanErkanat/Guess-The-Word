const players = document.getElementById("players");
const storage = new Storage();
const ui = new UI();

document.addEventListener("DOMContentLoaded",function(e){
    const playerList = storage.getPlayersFromStorage();
    //playerlar zaten scoreuna gore sıralandı o yuzden direkt burda yapıstır
    playerList.sort((a, b) => (a.score < b.score) ? 1 : -1) //sorting
   playerList.forEach(function(player,index){
       ui.addPlayerToUI(players,player,index);
   })
});

