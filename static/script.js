const socket = io()

const form = document.getElementById('form')
const input = document.getElementById('userInput')
const messages = document.getElementById('messages')

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    if(input.value){
        socket.emit('new_message', input.value)
        input.value = ''
    }
})

socket.on('message', (message)=>{
    console.log(message)
    let newItem = document.createElement('li')
    newItem.textContent = message
    messages.appendChild(newItem)
    window.scrollTo(0, document.body.scrollHeight)
})

function changeNickname(){
    let newNickname = prompt('Enter your nickname')
    if(newNickname) socket.emit('set_nickname', newNickname)
}

changeNickname()