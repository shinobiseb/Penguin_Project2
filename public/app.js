// const { on } = require("../models/song")

const yesBut = $("#yes")
const noBut = $("#no")
const overlay = $("#overlay")
const resetBut = $("#reset")
const modalAll = $("#modal")
const overlayOn = overlay

$(resetBut).click( function(){
    console.log(resetBut)
    $("#modalAll").css('display', 'flex')
})

$(yesBut).click( function(){
    console.log(resetBut)
    setTimeout(() => {
  window.location.reload()
}, 700);
    $("#modalAll").css('display', 'none')
})


$(noBut).click( function(){
    console.log(resetBut)
    window.location.reload()
    $("#modalAll").css('display', 'none')
})