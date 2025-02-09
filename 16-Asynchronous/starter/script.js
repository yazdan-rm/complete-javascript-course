'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
const imagesContainer = document.querySelector('.images');

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const renderCountry = function(data, className = '') {
  console.log(data);
  const html = `
          <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
            <p class="country__row"><span>🗣️</span>${data.languages.fas}</p>
          </div>
        </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

///////////////////////////////////////
// const getCountriesData = function(country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country.toLowerCase()}`, true);
//   request.send();
//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//
//     const html = `
//           <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)} people</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.fas}</p>
//           </div>
//         </article>
//   `;
//
//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
//   });
// };
//
// getCountriesData('usa');
// getCountriesData('iran');

// getCountriesData('germany');

// const getCountryAndNeighbour = function(country) {
//
//   // AJAX call country 1
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country.toLowerCase()}`, true);
//   request.send();
//
//   request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//
//     // Render country 1
//     renderCountry(data);
//
//     // Get neighbour country 2
//     const neighbour = data.borders?.[0];
//
//     if(!neighbour) return;
//     // AJAX call country 1
//     const request2 = new XMLHttpRequest();
//     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`, true);
//     request2.send();
//
//     request2.addEventListener('load', function() {
//       const [data2] = JSON.parse(this.responseText);
//       console.log(data2);
//
//       // Render country 2
//       renderCountry(data2, 'neighbour');
//     })
//   });
// };
//
// getCountryAndNeighbour('iran');
// // Callback hell
// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000);

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${coduntry.toLowerCase()}`, true);
// request.send();

const getJson = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
      if (!response.ok)
        throw new Error(`${errorMsg} (${response.status})`);
      return response.json();
    }
  );
};

// const request = fetch('https://restcountries.com/v3.1/name/iran');
// console.log(request);
//
// const getCountryData = function(country) {
//   // Country 1
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response);
//
//       if(!response.ok)
//         throw new Error(`Country not found ${response.status}`);
//
//       return response .json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if(!neighbour) return;
//
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => {
//
//       if(!response.ok)
//         throw new Error(`Country not found ${response.status}`);
//
//       return response.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err} 💥💥💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`)
//     })
//     .finally(()=> {
//       countriesContainer.style.opacity = 1;
//     });
// };

//
// const getCountryData = function(country) {
//   // Country 1
//   getJson(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       if(!neighbour) throw new Error('Not neighbour found!');
//
//       // Country 2
//       return getJson(`https://restcountries.com/v3.1/alpha/${neighbour}`, 'Country not found');
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(err => {
//       console.error(`${err} 💥💥💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`)
//     })
//     .finally(()=> {
//       countriesContainer.style.opacity = 1;
//     });
// };
// //
// // btn.addEventListener('click', function(){
// //   getCountryData('iran');
// // });
//
//
// //////////////////////////////////////////////////////
// // Coding challenge #1
//
// const whereAmI = function(latitude, longitude) {
//   let countryName;
//   fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=452974544739329260552x10709`)
//     .then(response => {
//       if (!response.ok) throw new Error(`${response.status} (${response.ok})`);
//       return response.json();
//     })
//     .then(json => {
//       console.log(`You are in ${json.city}, ${json.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${json.country.toLowerCase()}`);
//     })
//     .then(res => res.json())
//     .then(json => renderCountry(json[0]))
//     .catch(error => {
//       console.log(error.message);});
// };
//
// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log('Test start');
// setTimeout(()=> console.log('0 sec timer'), 0);
// Promise.resolve('Resolved promise 1').then(res =>
// console.log(res));
//
// Promise.resolve('Resolved promise 2').then(res =>{
//   for(let i = 0; i < 1000000000; i++){}
//   console.log(res);
// })
// console.log('test end');

// const lotteryPromise = new Promise((resolve, reject) => {
//   console.log('Lottery draw is happening 🔮');
//   setTimeout(() => {
//     if (Math.random() >= 0.5) {
//       resolve('You win 🤑');
//     } else {
//       reject(new Error('You lost your money 💩'));
//     }
//   }, 2000);
// });
//
// lotteryPromise
//   .then(res => console.log(res))
//   .catch(err => console.error(err));
//
// // Promisify setTimeout
const wait = function(seconds) {
  return new Promise(resolve => setTimeout(resolve, seconds * 1000));
};
//
// wait(2)
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => console.log('I waited for 1 seconds'));
//
// const getPosition = function(){
//   return new Promise((resolve, reject) =>{
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };
//
// const whereAmI = function() {
//   getPosition()
//     .then(data => {
//       const {latitude: lat, longitude: lng} = data.coords;
//       return  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=452974544739329260552x10709`);
//     })
//     .then(response => {
//       if (!response.ok) throw new Error(`${response.status} (${response.ok})`);
//       return response.json();
//     })
//     .then(json => {
//       console.log(`You are in ${json.city}, ${json.country}`);
//       return fetch(`https://restcountries.com/v3.1/name/${json.country.toLowerCase()}`);
//     })
//     .then(res => res.json())
//     .then(json => renderCountry(json[0]))
//     .catch(error => {
//       console.log(error.message);});
// };
//
// whereAmI();

//////////////////////////////////////////////////
// Coding Challenge #2

// const createImage = function(imgPath) {
//   return new Promise((resolve, reject) => {
//     const imageEl = document.createElement('img');
//     imageEl.src = imgPath;
//
//     imageEl.addEventListener('load', function() {
//       imagesContainer.append(imageEl);
//       resolve(imageEl);
//     });
//
//     imageEl.addEventListener('error', () => reject(new Error('Image not found :(')));
//   });
// };
//
// let currentImg;
// createImage('./img/img-1.jpg').then(imageEl => {
//   currentImg = imageEl;
//   console.log('Image 1 loaded');
//   return wait(2)
// }).then(()=> {
//     wait(2).then(() => {
//       currentImg.style.display = 'none';
//       return createImage('./img/img-2.jpg');
//     }).then(img => {
//       currentImg = img;
//       console.log('Image 2 loaded');
//       return wait(2)
//
//     }).then(() => {
//       currentImg.style.display = 'none';
//     })
//   }).catch((e) => {
//     console.error(e);});

const getPosition = function() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function() {
try {
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=452974544739329260552x10709`);
  if(!resGeo.ok) throw new Error('Problem getting geolocation');
  const dataGeo = await resGeo.json();
  console.log(dataGeo);

  const res = await fetch(`https://restcountries.com/v3.1/name/${dataGeo.country}`);
  if(!res.ok) throw new Error('Problem getting geolocation');
  const data = await res.json();
  renderCountry(data[0]);
}catch(err) {
  console.error(err);
  renderError('something went wrong!');
}
};

whereAmI('iran');
console.log('FIRST');

// try{
//   let y = 1;
//   const x = 2;
//   x = 2;
// }catch(e){
//   alert(e.message);
// }
















