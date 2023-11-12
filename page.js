const letter = ['A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
//const random = () => Math.floor(Math.random()*26);//עבור מילה רנדומלית
const randomNew = () =>  Math.floor(Math.random()*19);
const newWord = ["FATHER","BROTHER","SISTER","WOMAN","MOTHER","GIRL","SON","COUSIN","UNCLE","PARENTS","BABY","CHILDREN","BOY","FAMILY","GRANDFATHER","GRANDMOTHER","RELATIVE","LAD","LASS"]

let index = 20;
let count = 0;
let word;

/*//מגרילה מילה אותיות רנדומליות
function randomWord(){debugger;
    let length = Math.random()*10;
    length = Math.round(length);
    word = [];
    for(let i = 0; i<length; i++){
        word[i]=letter[random()];
    }
    return word;
}*/


// הגרלת מילה משפחה
function randomWord(){debugger;
    let length = randomNew();
    word = newWord[length];
    return word;
}


//בודקת אם האות קיימת
function searchLetter(word , letter){ debugger;
    let flag=false;
    if(index===29 || count===word.length){
        return;
    }
    for(let i=0; i<word.length; i++){
        if(word[i]===letter){         //הכנסת האות למקומה אם קיימת
           let td = document.getElementById(i);
           document.getElementById('h').play();
           td.innerText = '';
           td.innerText = letter;
           flag=true;
           count++;
        }
    }
    if(!flag){
        index++;
        document.getElementById('p').play();
        document.getElementById(index).style.backgroundColor = "unset";
    }
    /*מסתיר כפתור שנלחץ
    document.getElementById(letter).style.visibility="hidden";*/
   
   //צובע את הכפתורים שנלחצו בצהב ולא מסתיר אותם
   document.getElementById(letter).style.backgroundColor="rgb(232, 232, 98)";
   document.getElementById(letter).onclick="eny()";
   

    if(count===word.length){
        document.getElementById('yes').style.visibility = "visible";
        document.getElementById('good').play();
    }
    if(index===29){
        document.getElementById('no').style.visibility = "visible";
        document.getElementById('bed').play();
    }
}


//יוצרת פסים
function hiddenWord(word, table){debugger;
    let row = document.createElement('tr');
    for(let i=0; i<word.length; i++){
        let lett = document.createElement('td');
        lett.setAttribute('id' , i);
        lett.setAttribute('class', "tdW")
        lett.innerText = "__"
        row.append(lett);
    }
    table.append(row);
    document.getElementById('b').style.visibility = "visible";
}

function eny(){}




