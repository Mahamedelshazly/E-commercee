const myicon = document.querySelectorAll('.lov');
myicon.forEach(icn => {
  icn.onclick = ()=>{
    icn.classList.toggle("red");
  }
});
var myDiv =document.getElementById('text'),
myButton = document.getElementById('cart');
myButton.onclick = function (){
  myDiv.classList.toggle('hidden');
};
