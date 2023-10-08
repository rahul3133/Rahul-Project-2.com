let colorGenerate = () => {
    // Generate Random Number
    let randomNumber = Math.floor(Math.random() * 16777215);
    // Generate Random Color Code with '#'
    randomCode = "#" + randomNumber.toString(16);
    // console.log(randomNumber, randomCode)
    // Set Property
    document.body.style.backgroundColor = randomCode;
    document.getElementById("colorcode").innerHTML = randomCode;
}

// call
document.getElementById("button").addEventListener("click", function(){
    colorGenerate();
})

// Welcome Sense
alert("Hey 👋Sir, Welcome to Random Color Generate Web.")