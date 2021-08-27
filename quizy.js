const pic = [
    "https://d1khcm40x1j0f.cloudfront.net/quiz/34d20397a2a506fe2c1ee636dc011a07.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/512b8146e7661821c45dbb8fefedf731.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/ad4f8badd896f1a9b527c530ebf8ac7f.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/ee645c9f43be1ab3992d121ee9e780fb.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/6a235aaa10f0bd3ca57871f76907797b.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/0b6789cf496fb75191edf1e3a6e05039.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/23e698eec548ff20a4f7969ca8823c53.png",
    "https://d1khcm40x1j0f.cloudfront.net/quiz/50a753d151d35f8602d2c3e2790ea6e4.png",
    "https://d1khcm40x1j0f.cloudfront.net/words/8cad76c39c43e2b651041c6d812ea26e.png",
    "https://d1khcm40x1j0f.cloudfront.net/words/34508ddb0789ee73471b9f17977e7c9c.png",
];

box1 = [
    ["たかなわ","たかわ","こうわ"],
    ["かめど","かめいど","かめと"],
    ["かゆまち","おかとまち","こうじまち"],
    ["おかどもん","おなりもん","ごせいもん"],
    ["たたりき","たたら","とどろき"],
    ["いじい","しゃくじい","せきこうい"],
    ["ざっしょく","ざっしき","ぞうしき"],
    ["ごしろちょう","おかちまち","みとちょう"],
    ["ししぼね","ろっこつ","しこね"],
    ["こばく","こしゃく","こぐれ"]
];   //配列の中の配列 何問目のいくつかという考え方

boxAns = [
    "たかなわ",
    "かめいど",
    "こうじまち",
    "ごせいもん",
    "とどろき",
    "しゃくじい",
    "ざっしょく",
    "おかちまち",
    "しこね",
    "こぐれ"
];

for(let count =0;count<10;count++){
let classes = 
'<div class="contain">'+

    `<p><span class="question">${count+1}.この地名はなんて読む？</span></p>`+
    `<img src="${pic[count]}"/>`+

    `<p id="choice1_${count+1}" class="box">${box1 [count] [0]}</p>`+
    `<p id="choice2_${count+1}" class="box">${box1 [count] [1]}</p>`+
    `<p id="choice3_${count+1}" class="box">${box1 [count] [2]}</p>`+

    `<div class="ans" id="ansT_${count+1}">`+
        '<h1 class="answer_boxI1">'+'正解！'+'</h1>'+
        `正解は「${boxAns [count]}」です！`+
    '</div>'+

    `<div class="ans" id="ansF_${count+1}">`+
        '<h1 class="answer_boxI23">'+'不正解！'+'</h1>'+
        `正解は「${boxAns [count]}」です！`+
    '</div>'+

'</div>';
    // document.write(clsses);
    document.currentScript.insertAdjacentHTML('beforebegin',classes);
};
//HTMLの操作

for(let  count=0;count<10;count++){

    document.getElementById(`choice1_${count+1}`).onclick = function () {
        document.getElementById(`choice1_${count+1}`).style.backgroundColor = "rgb(41,125,254)"; //選択肢の文字
        document.getElementById(`choice1_${count+1}`).style.color = "white";  //選択肢の背景
        document.getElementById(`ansT_${count+1}`).style.display = "block"; //答えの表示
        // `choice1_${count+1}`.classList.add("cannotClick");//クリックできなくする
        // `choice2_${count+1}`.classList.add("cannotClick");//クリックできなくする
        // `choice3_${count+1}`.classList.add("cannotClick");//クリックできなくする
    };
    document.getElementById(`choice2_${count+1}`).onclick = function () {
        document.getElementById(`choice1_${count+1}`).style.backgroundColor = "rgb(41,125,254)";
        document.getElementById(`choice1_${count+1}`).style.color = "white";
        document.getElementById(`choice2_${count+1}`).style.backgroundColor = "rgb(255,80,40)";
        document.getElementById(`choice2_${count+1}`).style.color = "white";
        `ansF_${count+1}`.style.display = "block"; 
        // `choice1_${count+1}`.classList.add("cannotClick");
        // `choice2_${count+1}`.classList.add("cannotClick");
        // `choice3_${count+1}`.classList.add("cannotClick");
    };
    document.getElementById(`choice3_${count+1}`).onclick = function () {
        document.getElementById(`choice1_${count+1}`).style.backgroundColor = "rgb(41,125,254)";
        document.getElementById(`choice1_${count+1}`).style.color = "white";
        document.getElementById(`choice3_${count+1}`).style.backgroundColor = "rgb(255,80,40)";
        document.getElementById(`choice3_${count+1}`).style.color = "white";
        `ansF_${count+1}`.style.display = "block"; 
        // `choice1_${count+1}`.classList.add("cannotClick");
        // `choice2_${count+1}`.classList.add("cannotClick");
        // `choice3_${count+1}`.classList.add("cannotClick");
    };
};
//関数の操作