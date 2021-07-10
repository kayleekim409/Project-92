function addUser() {
    var player1 = document.getElementById("player1").value;
    var player2 = document.getElementById("player2").value;
    localStorage.setItem("player_1", player1);
    localStorage.setItem("player_2", player2);
    window.location = "gamePage.html";

}
var question_turn = "player1";
var answer_turn = "player2";

function check() {
    var get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            var update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        } else {
            var update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2"
        document.getElementById("question").innerHTML = "Question Turn - " + player2_name;
        answer_turn = "player2"
        document.getElementById("answer").innerHTML = "Answer Turn - " + player1_name;
    } else {
        question_turn = "player1"
        document.getElementById("question").innerHTML = "Question Turn - " + player1_name;
        answer_turn = "player2"
        document.getElementById("answer").innerHTML = "Answer Turn - " + player2_name;
    }
}