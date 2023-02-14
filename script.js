
const name = document.querySelector("#name")
const email = document.querySelector("#email")
const phone = document.querySelector("#phone")
const message = document.querySelector("#message")

const form= document.querySelector("#form")
form.addEventListener("submit",(event)=>{
    event.preventDefault()
    console.log(name.value,email.value,phone.value,message.value)
})

