import func_list from './index.js'
export default fetchCountries;

console.log(func_list);

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
          render(response[0]);
        }
      })
      .catch(() => console.log("Input ERROR or No Data !!!"));
  }

  