let feedbackForm = document.querySelector(".feedback");
let feedbackBtn = feedbackForm.querySelector(".btn-form");
let modalContent = document.querySelector(".modal-content");
let modalOverlay = document.querySelector(".modal-overlay");
let btnClose = modalContent.querySelector(".modal-content-close");

feedbackBtn.addEventListener("click", function(event) {
  event.preventDefault();
  modalContent.classList.add("modal-content-show");
  modalOverlay.classList.add("modal-content-show");
})

btnClose.addEventListener("click", function(event) {
  event.preventDefault();
  modalContent.classList.remove("modal-content-show");
  modalOverlay.classList.remove("modal-content-show");
})
