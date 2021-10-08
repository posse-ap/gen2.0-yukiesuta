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

    
for(let j =0;j<3;j++){
        //シャッフルの記述
        while (number.length > 0) {
            n = number.length;
            k = Math.floor(Math.random() * n);
            newNumber.push(number[k]);
            number.splice(k, 1);
        }
        console.log(newNumber[0]);
        
        i = newNumber[j];
        
        let optionLoop =
        `<p id="choice${option [count] [newNumber[i]]}_${count+1}" class="box${count}">${option [count] [newNumber[i]]}</p>`;
        document.getElementById(`imgNext${count}`).insertAdjacentHTML('afterEnd', optionLoop);
        console.log(`imgNext${count}`);
        console.log(document.getElementById(`imgNext${count}`));
        console.log(document.getElementById(`choice${option [count] [newNumber[i]]}_${count+1}`));
        // console.log(document.getElementById(`choice${option [count] [newNumber[i]]}_${count+1}`).indexOf(`${option[0]}`);
        // document.getElementById(`choice${option [count] [newNumber[k]]}_${count+1}`).onclick = function(){
        //     document.getElementById(`ansT_${count+1}`).style.display = "block";//答えの表示
        // }
        // if(document.getElementById(`choice${option [count] [newNumber[i]]}_${count+1}`).indexOf(`${option[0]}`)){
        //     document.getElementById(`ansT_${count+1}`).style.display = "block"
        // }else{
        //     document.getElementById(`ansF_${count+1}`).style.display = "block"
        // };
    };
    // if(document.getElementById(`choice${option [count] [newNumber[k]]}_${count+1}`).onclick.indexOf(document.getElementById(`choice${option [count] [newNumber[i]]}_${count+1}`)) !=-1){
    //     document.getElementById(`ansT_${count+1}`).style.display = "block"
    // }else{
    //     document.getElementById(`ansF_${count+1}`).style.display = "block"
    // };
    console.log(document.getElementById(`choice${option[count][0]}_${count+1}`));
    
    console.log(document.getElementsByClassName(`box${count}`));


    function afterPush (){
        for(let l=0;l<3;l++){
            document.getElementById(`choice${option [count] [`${l}`]}_${count+1}`).style.cursor = "pointer";
            document.getElementById(`choice${option [count] [`${l}`]}_${count+1}`).style.pointerEvents = "none";
        };
    };
    


    
    document.getElementById(`choice${option [count] [0]}_${count+1}`).onclick = function(){
        document.getElementById(`ansT_${count+1}`).style.display = "block";
        document.getElementById(`ans_${count+1}`).style.display = "block";
        afterPush;
        console.log("aaa");
        };

    for(let k=0;k<2;k++){
        document.getElementById(`choice${option [count] [`${k+1}`]}_${count+1}`).onclick = function(){
            document.getElementById(`ansF_${count+1}`).style.display = "block";
            document.getElementById(`ans_${count+1}`).style.display = "block";
            afterPush;

            for(let l=0;l<3;l++){
                document.getElementById(`choice${option [count] [`${l}`]}_${count+1}`).style.cursor = "pointer";
                document.getElementById(`choice${option [count] [`${l}`]}_${count+1}`).style.pointerEvents = "none";
            };


            console.log("aaa");
        };
    };


    // document.getElementById(`ansT_${count+1}`).style.display = "block";

    // if(document.getElementById(`choice${option [count] [0]}_${count+1}`).onclick){
    //     document.getElementById(`ansT_${count+1}`).style.display = "block";
    //     console.log("aaa");
    // }else if(document.getElementById(`choice${option [count] [1]}_${count+1}`).onclick){
    //     // document.getElementById(`ansF_${count+1}`).style.display = "block";
    //     console.log("a");
    // }else{
    //     // document.getElementById(`ansF_${count+1}`).style.display = "block";
    //     console.log("asd");
    // };
    
};
