$(document).ready(function(){
$("img:odd").mouseenter(function(e){
    $(this).css("opacity", "0,5")
}).mouseout(function(e){
    $(this).css("opacity", "1.0")
})

})