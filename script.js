// when you click on the words they go to the jisho link
// How to get the Daily Vocab to show automatically
// Kanji corner

let count = 0;
let today = new Date();
let date = today.getDate();
count = date // 2 - 2;

function GetWords()
{   
    let words = new Array(
    "いってきます","いってらっしゃい","ただいま",
    "おかえりなさい","ごめなさい","おげんきですか",
    "よろしくおねがいします","うっかり","可也 (かなり)",
    "すっかり","なんとなく","かさをさす",
    "いっせきにちょう","にっしんげっぽ","うきうき",
    "おろおろ","くっきり","ごろごろ",
    "さらさら","どきどき","どんどん",
    "ぱっと","はっきり","もぐもぐ",
    "よれよれ","きがみじかい","みみがいたい",
    "めをまるくすろ","おににかなぼる","つきとすっぽん",
    "田中（たなか）","山田（やまだ）","中村（なかむら）",
    "木村（きむら）","林（はやし）","本田（ほんだ）",
    "北海道（ほっかいどう）","東京（とうきょう）","京都（きょうと）",
    "大阪（おおさか）","沖縄（おきなわ）","横浜（よこはま）",
    "名古屋（なごや）","本州（ほんしゅう）","四国（しこく）",
    "九州（きゅうしゅう）","太平洋（たいへいよう）","日本海（にほんかい）");
    let kanji = new Array("一","ni")
    if (count >= words.length / 3){
        count = 1;
    }
    let word1 = words[count * 3 - 3];
    let word2 = words[count * 3 - 2];
    let word3 = words[count * 3 - 1];
    document.getElementById("word1").innerHTML=word1;
    document.getElementById("word2").innerHTML=word2;
    document.getElementById("word3").innerHTML=word3;
    count = (count + 1);
}

function LinksDate() {
    let date = new Date();
    let day = date.getDay();
    if (day == 2 || day == 4){
        document.getElementById("blue").style.display = 'block';
        document.getElementById("red").style.display = 'none';
        document.getElementById("anchor").style.display = 'none';
    }

    else if (day == 3 || day == 5){ 
        document.getElementById("red").style.display = 'block';
        document.getElementById("blue").style.display = 'none';
        document.getElementById("anchor").style.display = 'none';
    }

    else if (day == 1){
        document.getElementById("red").style.display = 'none';
        document.getElementById("blue").style.display = 'none';
        document.getElementById("anchor").style.display = 'block';
    }
}


const showAll = () => {
    document.getElementById("red").style.display = 'block';
    document.getElementById("blue").style.display = 'block';
    document.getElementById("anchor").style.display = 'block';
    document.getElementsByClassName("container").style.alignItems = "center";
    document.getElementById("btn").style.display = "none";
}  

LinksDate();


// const show = (classname) => {
//     const elements = document.getElementById(classname);
//     for (let i = 0; i < elements.length; i++) {
//         elements[i].style.display = "block";
//     }
// }



// const setDisplay = (day) => {
//     if (day == 1) {
//         show("anchor");
//     }
//     else if (day == 2 || day == 4) {
//         show("blue");
//     }
//     else if (day == 3 || day == 5) {
//         show("red");
//     }
// }

// let currDate = new Date();
// let dayOfTheWeek = currDate.getDay();
// setDisplay(dayOfTheWeek);
