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


let memoryDiv = document.createElement('div')
memoryDiv.className = "memoryDiv"

memoryDiv.appendChild(memoryButton)
memoryDiv.appendChild(memoryMessage)

mainArea.appendChild(memoryDiv)

//Chooses a non-repeating random memory from memory api
function randNum () {

    let num = Math.floor(Math.random() * 25)

    while (num == lastNum)
    {
        num = Math.floor(Math.random() * 25)
    }

    return num


}

let lastNum = 0;

memoryButton.addEventListener('click', () => {

    let tempId = randNum()


    memories.forEach(function(memory) {
        
        if(memory.id == tempId) 
        {
            memoryMessage.textContent = memory.family_member + " says: " + memory.memory
            famPic.src = memory.img
            memoryDiv.appendChild(famPic)
            lastNum = memory.id
        }
        
    })


})