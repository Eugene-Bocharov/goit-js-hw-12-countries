
export default fetchCountries;


function fetchCountries(searchQuery) {
    
    fetch(`https://restcountries.com/v2/name/${searchQuery}`)
        .then((response) => response)
        .then(data => data.json())
        .then(res => {
            let response;
            response = res;
            console.log(response)
            render(response[0])
        })
        .catch(()=>console.log('Input ERROR or No Data !!!'))
  };