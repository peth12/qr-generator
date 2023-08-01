const wrapper = document.querySelector(".wrapper")
getInput = wrapper.querySelector(".form input")
generateBtn = wrapper.querySelector(".form button")
qrImg = wrapper.querySelector(".qr-code img")


generateBtn.addEventListener("click", () => {
    let qrValue = getInput.value
    console.log(qrValue)
    if(!qrValue) return;
    generateBtn.innerText = "Generating QR Code..."
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${qrValue}`
    
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active")
        generateBtn.innerText = "Generater QR Code"
    })
    
    
})