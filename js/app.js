import "../css/style.css"
const wordContainer = document.getElementById("word")
let iWord = 0
let iLetters = 0;
const words = ["design", "frontend", "backend", "testing"]

setInterval(() => {
    let word = words[iWord]
    if (iLetters === word.length) {
        iLetters = 0;
        iWord++
        wordContainer.innerText = ""
    }
    if (iWord === words.length) {
        iWord = 0;
        iLetters = 0;
    }

    word = words[iWord]
    wordContainer.innerText += word[iLetters]
    iLetters++
}, 500);