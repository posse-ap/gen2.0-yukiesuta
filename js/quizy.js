//配列
const pic = [
    "../img/tokyo1.png",
    "../img/tokyo2.png",
    "../img/tokyo3.png",
    "../img/tokyo4.png",
    "../img/tokyo5.png",
    "../img/tokyo6.png",
    "../img/tokyo7.png",
    "../img/tokyo8.png",
    "../img/tokyo9.png",
    "../img/tokyo10.png",
    ];//写真

let choice = [
    ["たかなわ","たかわ","こうわ"],
    ["かめいど","かめど","かめと"],
    ["こうじまち","おかとまち","かゆまち"],
    ["ごせいもん","おなりもん","おかどもん"],
    ["とどろき","たたら","たたりき"],
    ["しゃくじい","いじい","せきこうい"],
    ["ざっしょく","ざっしき","ぞうしき"],
    ["おかちまち","ごしろちょう","みとちょう"],
    ["しこね","ろっこつ","ししぼね"],
    ["こぐれ","こしゃく","こしゃく"]
];//選択肢　一つ目を答えにする　配列の中の配列 何問目のいくつかという考え方





//HTMLの操作（for文ループ）
for(let count =0;count<10;count++){
    
    // 選択肢の表示をliタグごとシャッフルする場合
    // idとクラスを書き直すのがめんどくさいため断念(1/16)
    let option_script = [
        '<li class="choice" id="true-choice'+[count]+'">'+choice[count][0]+'</li>',
        '<li class="choice" id="wrong-choice'+[count]+1+'">'+choice[count][1]+'</li>',
        '<li class="choice" id="wrong-choice'+[count]+2+'">'+choice[count][2]+'</li>',
    ];

    for(i = option_script.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = option_script[i];
        option_script[i] = option_script[j];
        option_script[j] = tmp;
    }

    // console.log(option_script[0]);
    // console.log(option_script[1]);
    // console.log(option_script[2]);

    // ここまで


    //シャッフル前の配列
        const number = [0,1,2];
    //シャッフル後の配列（選択肢をシャッフルさせる）
        const newNumber = [];
    //シャッフルの記述
        while (number.length > 0) {
            n = number.length;
            k = Math.floor(Math.random() * n);
            newNumber.push(number[k]);
            number.splice(k, 1);
        }
        
    //本文
        let classes = 
        '<div class="contain">'+
            `<p><span class="question">${count+1}.この地名はなんて読む？</span></p>`+
            `<img src="${pic[count]}"/>`+
            `<p id="choice${choice [count] [newNumber[0]]}_${count+1}" class="box">${choice [count] [newNumber[0]]}</p>`+
            `<p id="choice${choice [count] [newNumber[1]]}_${count+1}" class="box">${choice [count] [newNumber[1]]}</p>`+
            `<p id="choice${choice [count] [newNumber[2]]}_${count+1}" class="box">${choice [count] [newNumber[2]]}</p>`+
    //デフォルトではCSSによる非表示
            `<div class="ans" id="ansT_${count+1}">`+
                '<div class="answerT">'+'<span class="correct_answer">'+'正解！'+'</span>'+'</div>'+
                `正解は「${choice [count][0]}」です！`+
            '</div>'+
            `<div class="ans" id="ansF_${count+1}">`+
                '<div class="answerT">'+'<span class="incorrect_answer">'+'不正解！'+'</span>'+'</div>'+
                `正解は「${choice [count][0]}」です！`+
            '</div>'+
        '</div>';
    
    document.currentScript.insertAdjacentHTML('beforebegin',classes);
    
    // console.log(number)
    // console.log(newNumber)
    // console.log(newNumber [0])//一週目のランダム数字はどこであれど同じ
};


// JSの操作　jsはdocument.getElementById()を記述してIDを取得する
for(let  count=0;count<10;count++){
    const number = [0,1,2];//正誤判定は一つ目が正解にしたいからシャッフルしない
    
    // console.log(number)
    // console.log(number [0])//０を指名することにより常に一つ目（正解の選択肢）を採用

    let choice0_access = document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`);

   
    
    document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`).onclick = function () {
        choice0_access.style.backgroundColor = "rgb(41,125,254)";//選択肢の文字
        document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`).style.color = "white";//選択肢の背景
        document.getElementById(`ansT_${count+1}`).style.display = "block";//答えの表示
        document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`).classList.add("cannotClick");//クリックできなくする
        document.getElementById(`choice${choice [count] [number[1]]}_${count+1}`).classList.add("cannotClick");//クリックできなくする
        document.getElementById(`choice${choice [count] [number[2]]}_${count+1}`).classList.add("cannotClick");//クリックできなくする
    };
    document.getElementById(`choice${choice [count] [number[1]]}_${count+1}`).onclick = function () {
        document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`).style.backgroundColor = "rgb(41,125,254)";
        document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`).style.color = "white";
        document.getElementById(`choice${choice [count] [number[1]]}_${count+1}`).style.backgroundColor = "rgb(255,80,40)";
        document.getElementById(`choice${choice [count] [number[1]]}_${count+1}`).style.color = "white";
        document.getElementById(`ansF_${count+1}`).style.display = "block"; 
        document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`).classList.add("cannotClick");
        document.getElementById(`choice${choice [count] [number[1]]}_${count+1}`).classList.add("cannotClick");
        document.getElementById(`choice${choice [count] [number[2]]}_${count+1}`).classList.add("cannotClick");
    };
    document.getElementById(`choice${choice [count] [number[2]]}_${count+1}`).onclick = function () {
        document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`).style.backgroundColor = "rgb(41,125,254)";
        document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`).style.color = "white";
        document.getElementById(`choice${choice [count] [number[2]]}_${count+1}`).style.backgroundColor = "rgb(255,80,40)";
        document.getElementById(`choice${choice [count] [number[2]]}_${count+1}`).style.color = "white";
        document.getElementById(`ansF_${count+1}`).style.display = "block"; 
        document.getElementById(`choice${choice [count] [number[0]]}_${count+1}`).classList.add("cannotClick");
        document.getElementById(`choice${choice [count] [number[1]]}_${count+1}`).classList.add("cannotClick");
        document.getElementById(`choice${choice [count] [number[2]]}_${count+1}`).classList.add("cannotClick");
    };
};