import {memories} from './memories.js'



let mainArea = document.querySelector('main')


//Creating memory button/giving it a class
let memoryButton = document.createElement('button')
memoryButton.textContent = "Click me for a memory!"
memoryButton.className = "memoryButton"

let memoryMessage = document.createElement('h1')
memoryMessage.className = "memoryMessage"


let famPic = document.createElement('img')
famPic.className = "famPic"


mainArea.appendChild(memoryButton)
mainArea.appendChild(memoryMessage)

//Chooses random memory from memory api
function randNum () {
    return Math.floor(Math.random() * 5)
}

memoryButton.addEventListener('click', () => {

    let tempMem = randNum()


    memories.forEach(function(memory) {
        if(memory.id == tempMem)
        {
            memoryMessage.textContent = memory.memory
            famPic.src = memory.img
            mainArea.appendChild(famPic)
        }
    })


})