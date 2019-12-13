
import {memories} from './memories.js'



let mainArea = document.querySelector('main')


//Creating memory button/giving it a class
let memoryButton = document.createElement('button')
memoryButton.textContent = "Click me for a memory!"
memoryButton.className = "memoryButton"

let memoryMessage = document.createElement('h1')
memoryMessage.className = "memoryMessage"

//Different family avatar popup heads
let jessieHead = document.createElement('img')
jessieHead.src = "assests/Jessie-sharkHead.png"
jessieHead.className = "familyHeads"


mainArea.appendChild(memoryButton)
mainArea.appendChild(memoryMessage)

//Chooses random memory from memory api
function randNum () {
    return Math.floor(Math.random() * 5)
}

//Chooses random family member
function randFam () {
    return Math.floor(Math.random() * 8)
}

memoryButton.addEventListener('click', () => {

    mainArea.appendChild(jessieHead)
    let tempMem = randNum()

    memories.forEach(function(memory) {
        if(memory.id == tempMem)
        {
            console.log(memory.memory)
            memoryMessage.textContent = memory.memory
        }
    })


})