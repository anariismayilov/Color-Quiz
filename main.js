//shortcuts
let mainbutton = document.getElementsByClassName("mainbutton")[0]
let quizbox = document.getElementsByClassName("quizbox")[0]
let variantbox = document.getElementsByClassName("variantbox")[0]
let variant = document.getElementsByTagName("span")
let variantclass = document.getElementsByClassName("choice")
let quizlist = []
let quiznumber = 0
let timer = 0
let counter = document.getElementsByClassName("counter")[0].innerHTML
let para = document.getElementsByTagName("p")[0]
let paraclass = document.getElementsByClassName("para")[0]
//question template
function question(question, variant,) {
    this.question = question
    this.variant = variant   
}
//questions
let question0 = new question("", [],)
quizlist.push(question0)
let question1 = new question("", ["", "", "", "", "", ""])
quizlist.push(question1)
let question2 = new question("", ["", "", "", "", "", ""])
quizlist.push(question2)
let question3 = new question("", ["", "", "", "", "", ""])
quizlist.push(question3)
let question4 = new question("", ["", "", "", "", "", ""])
quizlist.push(question4)
let question5 = new question("", [],)
quizlist.push(question5)
// container innerhtml
for (let i = 0; i < quizlist[quiznumber].variant.length; i++) {
    let element = document.createElement("span")
    element.setAttribute("class", "choice")
    element.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")"
    element.innerHTML = quizlist[quiznumber].variant[i]
    variantbox.append(element)
}
//paragraph inner
if (quiznumber === 0) {
    para.innerHTML = "<button>" + "Start" + "</button>"
}
else {
    para.innerHTML = variant[Math.round(Math.random() * 5)].style.backgroundColor
}
// start/restart function
document.getElementsByTagName("button")[0].addEventListener("click", function () {
    next()
})
//next question
function next() {
    {
        if (timer === 0) {
            timer++
            setTimeout(function () {
                //time up
                let element = document.createElement("div")
                element.setAttribute("class", "over")
                element.style.backgroundColor = "yellow"
                element.innerHTML = "Time is up! Correct answers:" + document.getElementsByClassName("counter")[0].innerHTML
                quizbox.append(element)
                setTimeout(function () { quizbox.removeChild(element) }, 2000)
                quiznumber = quizlist.length - 2
                next()
            },
                //select input time
                document.getElementsByTagName("select")[0].selectedOptions[0].value)
            console.log(document.getElementsByTagName("select")[0].selectedOptions[0].value)
        }
        quiznumber++
        variantbox.innerHTML = ""
        // Finish/Reset    
        //counter reset      
        if (quiznumber === 0) {
            document.getElementsByClassName("counter")[0].innerHTML = 0
        }
        if (quiznumber == quizlist.length - 1) {
            quiznumber = -1
        }
        else if (quiznumber != 0) {
            // ABCD           
            for (let i = 0; i < quizlist[quiznumber].variant.length; i++) {
                let element = document.createElement("span")
                element.setAttribute("class", "choice")
                element.style.backgroundColor = "rgb(" + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + "," + Math.round(Math.random() * 255) + ")"
                element.innerHTML = quizlist[quiznumber].variant[i]
                variantbox.append(element)
            }
            para.innerHTML = variant[Math.round(Math.random() * 5)].style.backgroundColor
            choice()
        }
        document.getElementsByTagName("select")[0].style.display = "none"
        // Restart
        if (quiznumber == -1) {
            para.innerHTML = "<button>" + "Restart" + "</button>"
            document.getElementsByTagName("button")[0].addEventListener("click", function () {
                next()
            })
        }
        //Start
        if (quiznumber == 0) {
            para.innerHTML = "<button>" + "Start" + "</button>"
            document.getElementsByTagName("button")[0].addEventListener("click", function () {
                timer = 0
                next()
            })
            document.getElementsByTagName("select")[0].style.display = ""
        }
    }
}
//choose
function choice() {
    for (let i = 0; i < variantclass.length; i++) {
        variantclass[i].addEventListener("click",
            function () {
                //right&wrong
                if (variantclass[i].style.backgroundColor === para.innerHTML) {
                    if (document.getElementsByClassName("counter")[0].innerHTML == 0) { document.getElementsByClassName("counter")[0].innerHTML = 1 }
                    else { document.getElementsByClassName("counter")[0].innerHTML = (Number(document.getElementsByClassName("counter")[0].innerHTML) + 1) }
                    //right notification
                    let element = document.createElement("div")
                    element.setAttribute("class", "answer")
                    element.style.backgroundColor = "green"
                    element.innerHTML = "Correct"
                    quizbox.append(element)
                    setTimeout(function () { quizbox.removeChild(element) }, 500)
                    next()
                }
                //wrong notification
                else {
                    let element = document.createElement("div")
                    element.setAttribute("class", "answer")
                    element.style.backgroundColor = "red"
                    element.innerHTML = "Incorrect"
                    quizbox.append(element)
                    setTimeout(function () { quizbox.removeChild(element) }, 500)
                }
            })
    }
}
choice()

