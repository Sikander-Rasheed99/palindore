const txtInput = document.querySelector(".inputs input");
infoTxt = document.querySelector(".info-txt");
checkBtn = document.querySelector(".inputs button");
let filterInput;

checkBtn.addEventListener("click", () => {
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";
  if (filterInput != reverseInput) {
    return (infoTxt.innerHTML = `No, <span> ${txtInput.value}</span> isn't a Palindore`);
  }
  infoTxt.innerHTML = `Yes, <span> ${txtInput.value}</span> is a Palindore`;
});

txtInput.addEventListener("keyup", () => {
  filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  infoTxt.style.display = "none";
  checkBtn.classList.remove("active");
});