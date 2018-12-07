var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}
span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
 }
}
// $(document).ready(function(){
   
//     $('.modal-trigger').leanModal();
  // });

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.modal');
//     var instances = M.Modal.init(elems);
//   });