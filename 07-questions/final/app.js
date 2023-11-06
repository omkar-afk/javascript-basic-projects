//using selectors inside the element


// made by omkar
const questions = document.querySelectorAll(".question");
questions.forEach(function(question){
  const questionBtn = question.querySelector(".question-btn");
  questionBtn.addEventListener('click',function(){

    questions.forEach(function(item){
      if(item !== question){
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});



// const questions = document.querySelectorAll(".question");

// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");
//   // console.log(btn);

//   btn.addEventListener("click", function () {
//     // console.log(question);

//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });

//     question.classList.toggle("show-text");
//   });
// });

// traversing the dom(alternative logic)
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     const question = btn.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });

