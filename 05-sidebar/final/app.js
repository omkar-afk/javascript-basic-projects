// const toggleBtn = document.querySelector(".sidebar-toggle");
// const closeBtn = document.querySelector(".close-btn");
// const sidebar = document.querySelector(".sidebar");

// toggleBtn.addEventListener("click", function () {
//   if (sidebar.classList.contains("show-sidebar")) {
//     sidebar.classList.remove("show-sidebar");
//   } else {
//     sidebar.classList.add("show-sidebar");
//   }
//   // sidebar.classList.toggle("show-sidebar");
// });

// closeBtn.addEventListener("click", function () {
//   sidebar.classList.remove("show-sidebar");
// });

//done by omkar
const sidebarToggle = document.querySelector(".sidebar-toggle");
const closebtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");
sidebarToggle.addEventListener('click',function(){
  if (sidebar.classList.contains("show-sidebar")){
    sidebar.classList.remove("show-sidebar");
  }
  else{
    sidebar.classList.add("show-sidebar");
  }
});
closebtn.addEventListener('click',function(){
  sidebar.classList.remove("show-sidebar");
});


