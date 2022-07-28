function randomtext() {
    var randomtxt = ['ʕっ•ᴥ•ʔっ', '※\(^o^)/※', '(◕ᴥ◕ʋ)', '(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧', '(´・ω・)っ由','ଘ(੭*ˊᵕˋ)੭* ̀ˋ ɪɴᴛᴇʀɴᴇᴛ', '( ͡° ͜ʖ ͡°)', '(=^･ｪ･^=))ﾉ彡☆'];
    return randomtxt[Math.floor((Math.random() * 7.99))];
}

document.getElementById("spam").innerHTML = randomtext();