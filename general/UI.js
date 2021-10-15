class UI {
    constructor(){

    }
    addPlayerToUI(players,player,index){
        players.innerHTML += `
        <tr>
            <th scope="row">${index + 1}</th>
            <td>${player.nickName}</td>
            <td>${player.score}</td>
        </tr> 
    `
    }
    addOyuncuToUI(oyuncu,currentPlayer){
        oyuncu.textContent = currentPlayer;
    }
    changeWordText(word,mixedForm){
        word.textContent = mixedForm;
    }
    changeScore(score,newValue){
        score.textContent = `Score : ${newValue}`;
    }
    showAlert(alert,type,message){
        alert.classList = `alert alert-${type}`;
        alert.style.display = "block";
        alert.textContent = message;
    }
  
}