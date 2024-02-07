// Fetch the list of countries
fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    const select = document.getElementById("country");
    // Sort countries alphabetically by name
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    data.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.cca2;
      option.textContent = country.name.common;
      select.appendChild(option);
    });
  })
  .catch((error) => console.error("Error fetching countries:", error));

// video controll remove

document.addEventListener("DOMContentLoaded", function () {
  const video = document.querySelector("video");
  video.removeAttribute("controls");
});
