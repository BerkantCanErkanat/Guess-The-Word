class Storage {
    constructor(){

    }
    getPlayersFromStorage(){
        let players;

        if(localStorage.getItem("players") === null){
            players = [];
        }else{
            players = JSON.parse(localStorage.getItem("players"));
        }
        return players;
    }
    setCurrentPlayer(value){
        localStorage.setItem("currentPlayer",value);
    }
    getCurrentPlayer(){
        return localStorage.getItem("currentPlayer");
    }
    updatePlayers(players){
       localStorage.setItem("players",JSON.stringify(players));
    }
}