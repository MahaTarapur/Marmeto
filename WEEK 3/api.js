const fetch = require('node-fetch');
const url = 'https://api.themoviedb.org/3/search/movie?query=coolie&include_adult=false&language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGU0NzgyMjYzMGYyYTUzYzNmMWEzMGE1YjJkYzY5OCIsInN1YiI6IjY1YjIwMTc4NmVlY2VlMDE3YjM0NzM4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYQMAi4HweGlywjK48jn3OnCdCEUkuaWtQofZIonhU8'
  }
};
fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));


//   curl --request GET \
//      --url 'https://api.themoviedb.org/3/movie/11?api_key=18e47822630f2a53c3f1a30a5b2dc698'

//      curl --request GET \
    //  --url 'https://api.themoviedb.org/3/movie/11' \
//      --header 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOGU0NzgyMjYzMGYyYTUzYzNmMWEzMGE1YjJkYzY5OCIsInN1YiI6IjY1YjIwMTc4NmVlY2VlMDE3YjM0NzM4ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XYQMAi4HweGlywjK48jn3OnCdCEUkuaWtQofZIonhU8'

// let movies=await fetch(`https://api.themoviedb.org/3/movie/11?api_key=18e47822630f2a53c3f1a30a5b2dc698`)
// movies=await movies.json()
// console.log(movies);