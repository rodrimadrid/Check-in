const reseñas = [{

}]


$(".formulario").submit((e)=>{
  e.preventDefault()
  alert('Nos vemos pronto!')
})
let positionReseña = $("#reseñas").scrollTop()
$(document).scroll(function(){

  let position = $(document).scrollTop();
  let positionReseña = $("#reseñas").offset().top
  console.log(position)
  if ((position >= (positionReseña - 200))){
    $("#1.reseña").css({left: "0", visibility: "visible"})
  }
})
$("#btnRight").click((e)=>{
  for (var i = 0; i < reseñas.length; i++) {
    var visibility = document.getElementById(i).style.visibility
    if (visibility == "visible") {
      $('#'+i).css({left: "300px", visibility: "hidden"})
    }
  }

})
/*$("#btnLeft").click((e)=>{
  if () {
  }

})*/
