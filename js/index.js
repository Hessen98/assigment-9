var quote = [
    "Be yourself; everyone else is already taken",
    "So many books, so little time.",
    "A room without books is like a body without a soul.",
    "You know you are in love when you cant fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on",
    "Live as if you were to die tomorrow. Learn as if you were to live forever",
    "We accept the love we think we deserve.",
    "I am so clever that sometimes I don't understand a single word of what I am saying."
];

var btn = document.getElementById("btn");

function move(){
    var ran = parseInt(Math.random() * 10);
    document.getElementById("one").innerHTML = quote[ran];
}




// test

// var ran = parseInt(Math.random() * 10);

// function move(){
//     document.getElementById("one").innerHTML = quote[ran];
//     localStorage.setItem('num' , ran)

//     if (localStorage.getItem('num')  === ran) {
//         console.log('one')
//         document.getElementById("one").innerHTML = quote[ran];
//         console.log(ran)
//         console.log(localStorage.getItem('num'))
//     }
//     else {
//         console.log('two')
//         var ran = parseInt((Math.random() * 10)+1);
//         document.getElementById("one").innerHTML = quote[ran];
//         console.log(ran)
//         console.log(localStorage.getItem('num'))
//         console.log(ran)
//     }
// }





// function getNum(){
//     var getRange = parseInt(Math.random() * 10)
//     console.log(getRange);
//     if (localStorage.getItem("num") === getRange) {
//         localStorage.setItem("num", getRange);
//         console.log("work");
//     } else {
//         console.log("not work");
//         localStorage.setItem("num", getRange);
//     }
// }








