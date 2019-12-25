import {memories} from './memories.js'


let mainArea = document.querySelector('main')


//Creating memory button/giving it a class
let memoryButton = document.createElement('button')
memoryButton.textContent = "Click me for a memory!"
memoryButton.className = "memoryButton"

let memoryMessage = document.createElement('h1')
memoryMessage.id = "memoryMessage"


let famPic = document.createElement('img')
famPic.id = "famPic"


let memoryDiv = document.createElement('div')
memoryDiv.id = "memoryDiv"

let imgDiv = document.createElement('div')
imgDiv.id = "memoryDiv"

mainArea.appendChild(memoryButton)
memoryDiv.appendChild(memoryMessage)

mainArea.appendChild(imgDiv)
mainArea.appendChild(memoryDiv)

//Chooses a non-repeating random memory from memory api
function randNum () {

    let num = Math.floor(Math.random() * 30)

    while (num == lastNum)
    {
        num = Math.floor(Math.random() * 30)
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
            imgDiv.appendChild(famPic)
            lastNum = memory.id
        }
        
    })


})
