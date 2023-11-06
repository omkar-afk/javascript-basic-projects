// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay



//made by omkar
const modal = document.querySelector(".modal-overlay");
const closebtn = document.querySelector(".close-btn");
const modalBtn = document.querySelector(".modal-btn");

modalBtn.addEventListener("click",function(){
  modal.classList.add("open-modal");
});
closebtn.addEventListener("click",function(){
  modal.classList.remove("open-modal");
});




// const modalBtn = document.querySelector(".modal-btn");
// const modal = document.querySelector(".modal-overlay");
// const closeBtn = document.querySelector(".close-btn");

// modalBtn.addEventListener("click", function () {
//   modal.classList.add("open-modal");
// });
// closeBtn.addEventListener("click", function () {
//   modal.classList.remove("open-modal");
// });
