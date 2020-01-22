fetch('https://script.google.com/macros/s/AKfycbztJfE7EsLYCUEnt-haI00nIbnQvgUL2xj2onPrc7LGRqEgQrQ0/exec')
.then(function(response) {
    return response.json();
})
.then(function(question) {
    questions = question;
});


//title_01を表示
function num_selext(){
    document.getElementById('title_01').className ="visible";
    document.getElementById('player_view').className = "hidden";
}
count = 1;
//title_02を表示
function play_first(){
    document.getElementById('title_03').className = "hidden";
    if(count == 1){
        title_rand = Math.floor(Math.random() * (Object.keys(question).length + 1));
        player_sum = document.getElementById('number_player').value;
        number_rand = Math.floor(Math.random() * (Number(player_sum) + 1));
        if(number_rand == 0){
            number_rand = 1;
        }
    }
    if(count == number_rand){
        document.getElementById('player_title').innerText = questions[title_rand]["one"];
    }else{
        document.getElementById('player_title').innerText = questions[title_rand]["other"];
    }
    
    document.getElementById('title_02').className ="visible";
    document.getElementById('player_num').innerText = count;
    count ++;
    document.getElementById('title_01').className = "hidden";
}
//title_03を表示
function play_title(){
    var last = Number(player_sum) +1 ;
    if(count == last){
        document.getElementById('last_select').className ="visible";
    }else{
    document.getElementById('title_03').className ="visible";
    document.getElementById('player_num_next').innerText = count;
    }
    document.getElementById('title_02').className = "hidden";
}
//最初に戻る
function select_menber(){
    count = 1;
    document.getElementById('player_view').className ="visible";
    document.getElementById('last_select').className = "hidden";
    document.getElementById('result').className = "hidden";
    //document.getElementById('timer').className = "hidden";
    //document.getElementById('controls').className = "hidden";
}
//はいを押すと「game_start」を表示
function game_start(){
    document.getElementById('last_select').className = "hidden";
    document.getElementById('game').className ="visible";
}
//ゲームを終了して結果表示
function finish_game(){
    document.getElementById('game').className = "hidden";
    document.getElementById('result').className ="visible";
    document.getElementById('player').innerText = number_rand;
    document.getElementById('word').innerText = questions[title_rand]["one"];
}
