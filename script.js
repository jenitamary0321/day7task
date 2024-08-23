// Fetching data from the REST Countries API
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(countries => {
    
    // 1. Get all the countries from the Asia continent/region using Filter method
    const asianCountries = countries.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:', asianCountries);

    // 2. Get all the countries with a population of less than 2 lakhs using Filter method
    const smallPopulationCountries = countries.filter(country => country.population < 200000);
    console.log('Countries with population less than 200,000:', smallPopulationCountries);

    // 3. Print the following details: name, capital, flag using forEach method
    countries.forEach(country => {
      console.log(`Name: ${country.name.common}, Capital: ${country.capital?.[0] || 'No Capital'}, Flag: ${country.flags.png}`);
    });

    // 4. Print the total population of countries using reduce method
    const totalPopulation = countries.reduce((acc, country) => acc + country.population, 0);
    console.log('Total Population:', totalPopulation);

    // 5. Print the country that uses US dollars as currency
    const usdCountries = countries.filter(country => {
      return country.currencies && Object.keys(country.currencies).includes('USD');
    });
    console.log('Countries using US Dollars:', usdCountries.map(country => country.name.common));

  })
  .catch(error => console.error('Error fetching data:', error));
