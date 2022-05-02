import './style.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Routes/Header';
import FavoriteList from './Routes/FavoriteList';
import Search from './Routes/Search';


function App() {

  const [favorites, setFavorites] = useState([]);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState('');

  useEffect (() => {
    let data = localStorage.getItem('favorite');
    if(null === data) {
      localStorage.setItem('favorite', JSON.stringify([]));
      setFavorites([]);
    } else {
      setFavorites(JSON.parse(data));
    }
  }, []);

  const deleteFavorite = id => {
    const newData = favorites.filter(fw => fw.id !== id);
        localStorage.setItem('favorite', JSON.stringify(newData));

        setFavorites(favorites => favorites.filter(fw => fw.id !== id));
  }

  const findData = (e) => {
    const typing = e.target.value;
    setSearch(typing);

    fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${typing}`)
    .then(res => res.json())
    .then((data) => {
      const dataCopy = data.meals;
      setResults(dataCopy);
    })
    .catch(error => console.log(error));
  }


  return (
    <BrowserRouter>
      <div className="app">
          <Header></Header>
        <Routes>
          <Route path='/favorites' element={<FavoriteList></FavoriteList>}></Route>
          <Route path='/search' element={<Search search={search} findData={findData} results={results}></Search>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
