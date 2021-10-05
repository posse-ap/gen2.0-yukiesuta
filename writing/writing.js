let option =[
    ["たかなわ","たかわ","こうわ"],
    ["かめいど","かめど","かめと"],
    ["こうじまち","おかとまち","かゆまち"]
]

for(let count =0;count<3;count++){
    //シャッフル前の配列
    const number = [0,1,2];
    //シャッフル後の配列（選択肢をシャッフルさせる）
    const newNumber = [];

    console.log(number)

    //シャッフルの記述
        while (number.length > 0) {
            n = number.length;
            k = Math.floor(Math.random() * n);
            newNumber.push(number[k]);
            number.splice(k, 1);
        }
        console.log(newNumber[0])

        //本文
        let classes = 
        '<div class="contain">'+
            `<p><span class="question">${count+1}.この地名はなんて読む？</span></p>`+
            `<img src="${count+1}.png"/>`+
            `<p id="choice${option [count] [newNumber[0]]}_${count+1}" class="box">${option [count] [newNumber[0]]}</p>`+
            `<p id="choice${option [count] [newNumber[1]]}_${count+1}" class="box">${option [count] [newNumber[1]]}</p>`+
            `<p id="choice${option [count] [newNumber[2]]}_${count+1}" class="box">${option [count] [newNumber[2]]}</p>`+
    //デフォルトではCSSによる非表示
            `<div class="ans" id="ansT_${count+1}">`+
                '<div class="answerT">'+'<span class="correct_answer">'+'正解！'+'</span>'+'</div>'+
                `正解は「${option [count][0]}」です！`+
            '</div>'+
            `<div class="ans" id="ansF_${count+1}">`+
                '<div class="answerT">'+'<span class="incorrect_answer">'+'不正解！'+'</span>'+'</div>'+
                `正解は「${option [count][0]}」です！`+
            '</div>'+
        '</div>';
    
    document.currentScript.insertAdjacentHTML('beforebegin',classes);
    
}

