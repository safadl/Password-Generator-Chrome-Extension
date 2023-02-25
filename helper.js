document.addEventListener("DOMContentLoaded", function () {
  const select = document.querySelector("select");

  for (let i = 4; i <= 200; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.text = i;
    select.appendChild(option);
  }
});
