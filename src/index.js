var debounce = require("lodash.debounce");
// import fetchCountries from "./fetchCountries.js";
import template from "./templates/template.hbs";
import steer_template from "./templates/steer.hbs";
// import { alert, defaultModules } from '.../node_modules/@pnotify/core/dist/PNotify.js';

const searchInput = document.querySelector(".search_input");
const countryList = document.querySelector(".country_list");
const alert_block = document.querySelector(".alert");


searchInput.addEventListener(
  "keydown",
  debounce((event) => {
    event.preventDefault();
    let searchText = searchInput.value;
    if (searchText.length <= 0) {
      clear();
    } else {
      fetchCountries(searchText);
    }
  }, 1000)
);

function render(country) {
  const currentHtml = template(country);
  countryList.insertAdjacentHTML("beforeend", currentHtml);
}

function steer(country) {
  console.log(44);
  console.log(country);
  const current_steer = steer_template(country);
  countryList.insertAdjacentHTML("beforeend", current_steer);
}

function clear() {
  countryList.innerHTML = "";
}

function fetchCountries(searchQuery) {
  fetch(`https://restcountries.com/v2/name/${searchQuery}`)
    .then((response) => response)
    .then((data) => data.json())
    .then((res) => {
      let response;
      response = res;

      if (response.length > 10) {
        alert_block.classList.replace("alert", "alert_active");

        setTimeout(() => {
          alert_block.classList.replace("alert_active", "alert");
        }, 2000);
      } else if (response.length > 1 && response.length < 10) {
        steer(response);
      } else {
        clear();
        render(response[0]);
      }
    })
    .catch(() => console.log("Input ERROR or No Data !!!"));
}
