$(".formulario").submit((e)=>{
  e.preventDefault()
  alert('Nos vemos pronto!')
})
let positionReseña = $("#reseñas").scrollTop()

$(document).scroll(function(){

  let position = $(document).scrollTop();
  let positionReseña = $("#reseñas").offset().top
  console.log(position)
  if (position >= (positionReseña - 200)) {
    $("#reseñasBox").css("left", "35px")
  }
})
let resPosition = 45
let res = positionReseña - 200
$("#btnRight").click((e)=>{
  if (resPosition > -777) {
    resPosition -= 274
    $(".resBox").css({ left: `${resPosition}px` })
  }

})
$("#btnLeft").click((e)=>{
  if (resPosition < 45) {
    resPosition += 274
    $(".resBox").css({ left: `${resPosition}px` })

  }

})
