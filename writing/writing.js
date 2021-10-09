// 選択肢の配列
let option =[
    ["たかなわ","たかわ","こうわ"],
    ["かめいど","かめど","かめと"],
    ["こうじまち","おかとまち","かゆまち"]
];

// 問題を問題の数ループ
for(let count =0;count<option.length;count++){
    
    const number = [0,1,2];
    //シャッフル後の配列（選択肢をシャッフルさせる）毎回違う配列を準備するためletにする
    let newNumber = [];

    //本文
    let classes = 
    '<div class="contain">'+
        `<p><span class="question">${count+1}.この地名はなんて読む？</span></p>`+
    `<img src="${count+1}.png"/>`+`<div id="imgNext${count}"></div>`+

    //デフォルトではCSSによる非表示にしてクリックして適切に表示
    `<div class="ansT" id="ansT_${count+1}">`+
        '正解！'+
    '</div>'+

    `<div class="ansF" id="ansF_${count+1}">`+
        '不正解！'+
    '</div>'+

    `<div class="ans_${count} ans" id="ans_${count+1}">`+
        `正解は「${option [count][0]}」です！`+
    '</div>';
    
    document.currentScript.insertAdjacentHTML('beforebegin',classes);

    
    //選択肢の数ループ
        for(let j =0;j<option[count].length;j++){

    //シャッフルの記述
        while (number.length > 0) {
            n = number.length;
            k = Math.floor(Math.random() * n);
            newNumber.push(number[k]);
            number.splice(k, 1);
        }
    // シャッフル後の数字を適当に対応させる
        let i = newNumber[j];
    // 選択肢の記述
        let optionLoop =
        `<p id="choice_${count}_${i}" class="box">${option [count] [newNumber[i]]}</p>`;
    // 写真の後に選択肢を挿入
        document.getElementById(`imgNext${count}`).insertAdjacentHTML('afterEnd', optionLoop);
    };

    function afterPush (){
        for(let l=0;l<option[count].length;l++){
            document.getElementById(`choice_${count}_${l}`).style.cursor = "pointer";
            document.getElementById(`choice_${count}_${l}`).style.pointerEvents = "none";
        };
    };
console.log(document.getElementById(`choice_${count}_${0}`))
// console.log(document.getElementById(`choice${option [0] [0]}_${count+1}`))
    
    document.getElementById(`choice_${count}_${0}`).onclick = function(){
        document.getElementById(`ansT_${count+1}`).style.display = "block";
        document.getElementById(`ans_${count+1}`).style.display = "block";
        afterPush();
        };

    for(let k=0;k<2;k++){
        //上の２をoption[count].length-1で表したいけどうまくいかない
        document.getElementById(`choice_${count}_${k+1}`).onclick = function(){
            document.getElementById(`ansF_${count+1}`).style.display = "block";
            document.getElementById(`ans_${count+1}`).style.display = "block";
            afterPush();
        };
    };
};
