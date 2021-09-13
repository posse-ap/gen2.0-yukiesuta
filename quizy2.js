//配列
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
    ];//写真

    box1 = [
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
    ]; //選択肢　一つ目を答えにする　配列の中の配列 何問目のいくつかという考え方

//HTMLの操作（for文ループ）
    for(let count =0;count<10;count++){
    
        //シャッフル前の配列
            const　number = [0,1,2];
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
                `<p id="choice${box1 [count] [newNumber[0]]}_${count+1}" class="box">${box1 [count] [newNumber[0]]}</p>`+
                `<p id="choice${box1 [count] [newNumber[1]]}_${count+1}" class="box">${box1 [count] [newNumber[1]]}</p>`+
                `<p id="choice${box1 [count] [newNumber[2]]}_${count+1}" class="box">${box1 [count] [newNumber[2]]}</p>`+
        //デフォルトではCSSによる非表示
                `<div class="ans" id="ansT_${count+1}">`+
                    '<div class="answerT">'+'<span class="correct_answer">'+'正解！'+'</span>'+'</div>'+
                    `正解は「${box1 [count][0]}」です！`+
                '</div>'+
                `<div class="ans" id="ansF_${count+1}">`+
                    '<div class="answerT">'+'<span class="incorrect_answer">'+'不正解！'+'</span>'+'</div>'+
                    `正解は「${box1 [count][0]}」です！`+
                '</div>'+
            '</div>';
        
        document.currentScript.insertAdjacentHTML('beforebegin',classes);
        
        console.log(newNumber)
        console.log(newNumber [0])//一週目のランダム数字はどこであれど同じ
    };


// JSの操作　jsはdocument.getElementById()を記述してIDを取得する
    for(let  count=0;count<10;count++){
        const　number = [0,1,2];//正誤判定は一つ目が正解にしたいからシャッフルしない
        
        console.log(number)
        console.log(number [0])//０を指名することにより常に一つ目（正解の選択肢）を採用
        
        document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).onclick = function () {
            document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).style.backgroundColor = "rgb(41,125,254)";//選択肢の文字
            document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).style.color = "white";//選択肢の背景
            document.getElementById(`ansT_${count+1}`).style.display = "block";//答えの表示
            document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).classList.add("cannotClick");//クリックできなくする
            document.getElementById(`choice${box1 [count] [number[1]]}_${count+1}`).classList.add("cannotClick");//クリックできなくする
            document.getElementById(`choice${box1 [count] [number[2]]}_${count+1}`).classList.add("cannotClick");//クリックできなくする
        };
        document.getElementById(`choice${box1 [count] [number[1]]}_${count+1}`).onclick = function () {
            document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).style.backgroundColor = "rgb(41,125,254)";
            document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).style.color = "white";
            document.getElementById(`choice${box1 [count] [number[1]]}_${count+1}`).style.backgroundColor = "rgb(255,80,40)";
            document.getElementById(`choice${box1 [count] [number[1]]}_${count+1}`).style.color = "white";
            document.getElementById(`ansF_${count+1}`).style.display = "block"; 
            document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).classList.add("cannotClick");
            document.getElementById(`choice${box1 [count] [number[1]]}_${count+1}`).classList.add("cannotClick");
            document.getElementById(`choice${box1 [count] [number[2]]}_${count+1}`).classList.add("cannotClick");
        };
        document.getElementById(`choice${box1 [count] [number[2]]}_${count+1}`).onclick = function () {
            document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).style.backgroundColor = "rgb(41,125,254)";
            document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).style.color = "white";
            document.getElementById(`choice${box1 [count] [number[2]]}_${count+1}`).style.backgroundColor = "rgb(255,80,40)";
            document.getElementById(`choice${box1 [count] [number[2]]}_${count+1}`).style.color = "white";
            document.getElementById(`ansF_${count+1}`).style.display = "block"; 
            document.getElementById(`choice${box1 [count] [number[0]]}_${count+1}`).classList.add("cannotClick");
            document.getElementById(`choice${box1 [count] [number[1]]}_${count+1}`).classList.add("cannotClick");
            document.getElementById(`choice${box1 [count] [number[2]]}_${count+1}`).classList.add("cannotClick");
        };
    };