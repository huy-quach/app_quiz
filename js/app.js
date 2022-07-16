const username = document.getElementById("username");
const gender = document.getElementById("gender");
const year = document.getElementById("year");
const exam = document.getElementById("exam");
const form = document.querySelector("form");



function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("error");
  small.innerText = message;
}

function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("error");
  small.innerText = " ";
}

function checkEmptyError(listInput) {
  let isEmptyError = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyError = true;
      showError(input, "Không được để trống tại đây");
    } else {
      showSuccess(input);
    }
  });
  return isEmptyError;
}
function checkLengthError(input, min, max) {
  input.value = input.value.trim();
  console.log(input.value.length);
  if (input.value.length < min) {
    showError(input, `Phải có ít nhất ${min} ký tự`);
    return true;
  }
  if (input.value.length > max) {
    showError(input, `Không được quá ${max} ký tự`);
    return true;
  }
  showSuccess(input);
  return false;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isEmptyError = checkEmptyError([username, gender, year, exam]);
  let isUsernameLengthError = checkLengthError(username, 5, 30);
});
function myFunction() {
  var confirmusername = document.forms["myform"]["username"].value;
  // console.log(confirmusername);
  var confirmgender = document.forms["myform"]["gender"].value;
  // console.log(confirmgender);
  var confirmyear = document.forms["myform"]["year"].value;
  // console.log(confirmyear);
  let confirmexam = document.forms["myform"]["exam"].value;
  // console.log(confirmexam);
  if (confirmusername && confirmgender && confirmyear && confirmexam != "") {
    window.location.href = " ./main.html";
  }
  return false;
}