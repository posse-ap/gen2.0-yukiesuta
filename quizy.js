document.getElementById("choiceI1").onclick = function () {
    document.getElementById("choiceI1").style.backgroundColor = "rgb(41,125,254)"; //選択肢の文字
    document.getElementById("choiceI1").style.color = "white";  //選択肢の背景
    AnswerBlockI1.style.display = "block";  //答えの表示
    choiceI1.classList.add("cannotClick");//クリックできなくする
    choiceI2.classList.add("cannotClick");//クリックできなくする
    choiceI3.classList.add("cannotClick");//クリックできなくする
}
document.getElementById("choiceI2").onclick = function () {
    document.getElementById("choiceI1").style.backgroundColor = "rgb(41,125,254)";
    document.getElementById("choiceI1").style.color = "white";
    document.getElementById("choiceI2").style.backgroundColor = "rgb(255,80,40)";
    document.getElementById("choiceI2").style.color = "white";
    AnswerBlockI23.style.display = "block";
    choiceI1.classList.add("cannotClick");
    choiceI2.classList.add("cannotClick");
    choiceI3.classList.add("cannotClick");
}
document.getElementById("choiceI3").onclick = function () {
    document.getElementById("choiceI1").style.backgroundColor = "rgb(41,125,254)";
    document.getElementById("choiceI1").style.color = "white";
    document.getElementById("choiceI3").style.backgroundColor = "rgb(255,80,40)";
    document.getElementById("choiceI3").style.color = "white";
    AnswerBlockI23.style.display = "block";
    choiceI1.classList.add("cannotClick");
    choiceI2.classList.add("cannotClick");
    choiceI3.classList.add("cannotClick");
}