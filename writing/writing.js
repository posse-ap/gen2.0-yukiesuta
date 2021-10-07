let option =[
    ["たかなわ","たかわ","こうわ"],
    ["かめいど","かめど","かめと"],
    ["こうじまち","おかとまち","かゆまち"]
]

for(let count =0;count<option.length;count++){
    
    //本文
    let classes = 
    '<div class="contain">'+
    `<p><span class="question">${count+1}.この地名はなんて読む？</span></p>`+
    `<img src="${count+1}.png"/>`+`<div class="imgNext${count}></div>`+
    
    //デフォルトではCSSによる非表示にしてクリックして適切に表示
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
    
    for(let j =0;j<3;j++){

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

        i = newNumber[j];
        
        let optionLoop =
        `<p id="choice${option [count] [newNumber[i]]}_${count+1}" class="box">${option [count] [newNumber[i]]}</p>`
        document.currentScript.insertAdjacentHTML('beforebegin',optionLoop);
        // document.getElementById('imgNext${count}').insertAdjacentHTML('beforeend', optionLoop);
    }
}
