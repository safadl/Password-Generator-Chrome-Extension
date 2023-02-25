document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("result");
  var length = document.getElementById("length");

  const apiKey = API_KEY;
  const apiURL = `https://api.api-ninjas.com/v1/passwordgenerator?length=`;
  generate.addEventListener("click", () => {
    const lengthPassword = length.value;
    const url = apiURL + lengthPassword;

    fetch(url, {
      headers: {
        "X-Api-Key": apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const resultTotal = data.random_password;
        result.innerHTML = resultTotal;
      })
      .catch((error) => {
        console.error("Request failed:", error);
        result.innerHTML = "An error occured, please try again later";
      });
  });
});
