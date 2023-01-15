const notifications = document.querySelector(".notifications");
buttons = document.querySelectorAll(".buttons .btn");


const toastDetails = {
  timer: 5000,
  success: {
    icon: "fa-circle-check",
    text: "Success: This is a success toast.",
  },
  error: {
    icon: "fa-circle-xmark",
    text: "Error: This is a error toast.",
  },
  warning: {
    icon: "fa-triangle-exclamation",
    text: "Warning: This is a warning toast.",
  },
  info: {
    icon: "fa-circle-info",
    text: "Info: This is a information toast.",
  }
} 

const removeToast = (toast) => {
  toast.classList.add("hide");

  //===== Clearing the timeout for the toast
  if (toast.timeoutId) clearTimeout(toast.timeoutId);

  //===== Removing the toast after 500ms
  setTimeout(() => toast.remove(), 500);
}

const createToast = (id) => {

  //===== Getting the icon and text for the toast based on the id passed
  const { icon, text } = toastDetails[id];

  //===== Creating a new 'li' element for the toast
  const toast = document.createElement("li"); 

  //===== Seeting the Glasses for the toast
  toast.className = `toast ${id}`;
  
  //===== Setting the inner HTML for the toast
  toast.innerHTML =
                `<div class="column">
                <i class="fa-solid ${icon}"></i>
                <span>${text}</span>
                </div>
                <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
  
  //===== Append the toast to the notifications ul
  notifications.appendChild(toast);

  //===== Seeting a timeout to remove the toast after the specified duration
  toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);

}


//===== Addinn a click event listener to each button to create a toast when clicked
buttons.forEach(btn => {
  btn.addEventListener("click", () => createToast(btn.id));
});