let option =[
    ["たかなわ","たかわ","こうわ"],
    ["かめいど","かめど","かめと"],
    ["こうじまち","おかとまち","かゆまち"]
]

//シャッフル前の配列
const number = [0,1,2];
//シャッフル後の配列（選択肢をシャッフルさせる）
const newNumber = [];
console.log(number);

for(let count =0;count<option.length;count++){
    
    //本文
    let classes = 
    '<div class="contain">'+
    `<p><span class="question">${count+1}.この地名はなんて読む？</span></p>`+
    `<img src="${count+1}.png"/>`+`<div id="imgNext${count}"></div>`+
    
    //デフォルトではCSSによる非表示にしてクリックして適切に表示
    `<div class="ans" id="ansT_${count+1}">`+
        '正解！'+
    '</div>'+
    `<div class="ans" id="ansF_${count+1}">`+
        '不正解！'+
    '</div>'+
    '<div>'+
    `正解は「${option [count][0]}」です！`+
    '</div>';
    
    document.currentScript.insertAdjacentHTML('beforebegin',classes);
    
    for(let j =0;j<3;j++){

    
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
        document.getElementById(`imgNext${count}`).insertAdjacentHTML('afterEnd', optionLoop);
        console.log(`imgNext${count}`)
        console.log(document.getElementById(`imgNext${count}`))
    };
};
