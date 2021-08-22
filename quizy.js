for(let count =0;count<10;count++){
let classes = 

'<div class="contain">'+
    '<h3>'+'ガチで東京の人しか解けない！ #東京の難読地名クイズ'+'</h3>'+
    '<span class="question">'+' 1.この地名はなんて読む？ '+'</span>'+
    '<p id="choiceI2" class="box">'+'こうわ'+'</p>'+
    '<p id="choiceI3" class="box">'+'たかわ'+'</p>'+
    '<div class="answerITrue" id="AnswerBlockI1">'+
        '+<h1 class="answer_boxI1">'+'正解！'+'</h1>'+
        '正解は「たかなわ」です！'+
    '</div>'+
    '<div class="answerIFalse" id="AnswerBlockI23">'+
        '<h1 class="answer_boxI23">'+'不正解！'+'</h1>'+
        '正解は「たかなわ」です！'+
    '</div>'+
'</div>'+
     {/* <script type="text/javascript" src="quizy.js"></script> */}
    'document.write(classes);'
}
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