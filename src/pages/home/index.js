/* eslint-disable no-console */
import { films } from './mock.js';
import { createMenu } from '../../components/menu/index.js'
import { createMenuFilter } from '../../components/filters/index.js'


export const Home = () => {

     function getFilms(i) { 
  
       fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
          .then(response => response.json())
          .then(json =>  { console.log(json)
  
                 rootElement.innerHTML += ` 
                 <div class="movie-box">
                  <img class="image" src="${json.Poster}">
                  <p>${json.Title}</p>
                  <p>Awards: ${json.Awards}</p>
                  <p>Plot: ${json.Plot}</p>
                  <p>Genre: ${json.Genre}</p>
                  <p>Director: ${json.Director}</p>
                  <p>Year: ${json.Year}</p>
                  <p>IMDb Rating: ${json.imdbRating}</p>
                  <p>Runtime: ${json.Runtime}</p>
                 </div>
                  `  
           })     
     }   
  
     for(let i of films){
      getFilms(i)
    }
     
  const rootElement = document.createElement('div');
  rootElement.innerHTML = `
  <section class="main-page">
    <section id="header"></section>
    <section id="filter-list"></section>
    <section id="catalogue"></section>
    <section id="menu"></section>
  </section>
`;

  
const getAllFilms = () => {
  for (const i of films) {
    getFilms(i);
  }
}
getAllFilms();

const getMenuSection = rootElement.querySelector('#menu');
  getMenuSection.appendChild(createMenu());

const getMenuFilterSection = rootElement.querySelector('#filter');
  getMenuFilterSection.appendChild(createMenuFilter());

  return rootElement;
};

const getFilms = (i) => {
  fetch(`http://www.omdbapi.com/?t=${i.title}&apikey=ce12da02`)
    .then(response => response.json())
    .then(json => {
      // console.log(json)
      const getCatalogueSection = document.querySelector('#catalogue');
      getCatalogueSection.appendChild(printFilms(json));
      printFilms(json);
    })  
}

const printFilms = (json) => {
  const filmsContainer = document.createElement('section');
  filmsContainer.innerHTML += `
    <section class="movie-box">
        <img class="image" src="${json.Poster}">
        <p>${json.Title}</p>
        <section class="details">
            <p>Awards: ${json.Awards}</p>
            <p>Plot: ${json.Plot}</p>
            <p>Genre: ${json.Genre}</p>
            <p>Director: ${json.Director}</p>
            <p>Year: ${json.Year}</p>
            <p>IMDb Rating: ${json.imdbRating}</p>
            <p>Runtime: ${json.Runtime}</p>
        </section>
    </section>
   `
   return filmsContainer;
}
