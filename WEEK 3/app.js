

let searchValue;

function getSearchValue()
{
  searchValue=document.querySelector(".seachValue").value
  console.log(searchValue.split(" ").join("+"));
  searchValue=searchValue.split(" ").join("+")
  console.log(searchValue);
  fetchingMovies()
}

let allMovies;
function fetchingMovies()
{
const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1&api_key=50da0240279d0149cbef2349a30b5eea`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGRhMDI0MDI3OWQwMTQ5Y2JlZjIzNDlhMzBiNWVlYSIsInN1YiI6IjU2Y2ZjYWJiYzNhMzY4MWU0NDAwNTQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4fQwyEQMyNvkGSD2SDJBf9K_iHlt0WcZw0yFZktmkw'
  }
};
fetch(url, options)
  .then(res => res.json())
  .then(res => {
    searchedMovieData=res
    console.log(res) 
    allMovies=res
    displaySearchedMovie()
  })
  .catch(err => console.error('error:' + err));
}

let searchedMovie=document.querySelector(".searched_movie")
console.log(searchedMovie);

let searchedMovieData;
let movieid;
function displaySearchedMovie()
{
  movieid=searchedMovieData.results[0].id
  const url = `https://api.themoviedb.org/3/movie/${movieid}?api_key=50da0240279d0149cbef2349a30b5eea`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGRhMDI0MDI3OWQwMTQ5Y2JlZjIzNDlhMzBiNWVlYSIsInN1YiI6IjU2Y2ZjYWJiYzNhMzY4MWU0NDAwNTQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4fQwyEQMyNvkGSD2SDJBf9K_iHlt0WcZw0yFZktmkw'
    }
  };
  fetch(url, options)
    .then(res => res.json())
    .then(res => 
      {
      console.log(res) 
      searchedMovieData=res
      gn=searchedMovieData.genres[0].name
      searchedMovie.innerHTML=`
      <div class="searched_movie_img">
            <img src="http://image.tmdb.org/t/p/w500${searchedMovieData.backdrop_path}" alt="">
        </div>
        <div class="searched_movie_details_card">
          <div class="searched_movie_details">
            <h1>${searchedMovieData.original_title}</h1>
            <small>${searchedMovieData.genres[0].name},${searchedMovieData.genres[1].name}</small>
            <div class="dd">
              <p>${searchedMovieData.release_date}</p>
              <p>${searchedMovieData.overview}</p>
            </div>
          </div>
        </div>
      `
      genMovies()
      
      })
    .catch(err => console.error('error:' + err));
}


let genmov;
function genMovies()
{
const url = `https://api.themoviedb.org/3/movie/${movieid}/similar?language=en-US&page=1&api_key=50da0240279d0149cbef2349a30b5eea`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGRhMDI0MDI3OWQwMTQ5Y2JlZjIzNDlhMzBiNWVlYSIsInN1YiI6IjU2Y2ZjYWJiYzNhMzY4MWU0NDAwNTQ4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N4fQwyEQMyNvkGSD2SDJBf9K_iHlt0WcZw0yFZktmkw'
  }
};
fetch(url, options)
  .then(res => res.json())
  .then(res => {
    searchedMovieData=res
    console.log(res) 
    genmov=res
    addSlider() 
  })
  .catch(err => console.error('error:' + err));
}

function addSlider() 
{

  let slide=document.querySelector(".splide__list")

  console.log(genmov.results);
  let md=genmov.results

  md.map((m)=>
  {
    slide.innerHTML+=`
        <li class="splide__slide">
          <img src="http://image.tmdb.org/t/p/w500${m.poster_path}" alt="No Image Available">
          <button class="hrt">❤️</button>
          <h3>${m.original_title}</h3>
        </li>  
  `
  })

  

      var splide = new Splide( '.splide' ,{
        type       : 'loop',
        perPage:4,
        pagination:false
      });
      splide.mount();
} 
