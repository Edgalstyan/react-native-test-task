

export const getCountries = () => {
  return fetch('https://api.raino.app/countries')
    .then((response) => response.json())
    .catch((error) =>{
      console.error(error);
    });
};

export const getCurrencies = () => {
  return fetch('https://api.raino.app/currencies')
    .then((response) => response.json())
    .catch((error) =>{
      console.error(error);
    });
};
