const { Country, State, City } = require('country-state-city');

// Separador
console.log('------------------------CASO COLOMBIA----------------------------------');

// Caso de colombia
console.log(Country.getCountryByCode('CO'));

// Caso departamentos de colombia
console.log(State.getStatesOfCountry('CO'));

// Información departamento del meta
console.log(State.getStateByCodeAndCountry('MET','CO'));

// Información de ciudades del departamento del META
console.log(City.getCitiesOfState('CO','MET'));

// Separador
console.log('------------------------CASO CHILE----------------------------------');

// Caso de colombia
console.log(Country.getCountryByCode('CL'));