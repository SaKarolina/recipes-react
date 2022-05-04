import './style.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from './Routes/Header';
import FavoriteList from './Routes/FavoriteList';
import Search from './Routes/Search';

function App() {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect (() => {
    let data = localStorage.getItem('favorite');
    if(data === null) {
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

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const findData = () => {
    if (search !== '') {
      fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then(res => res.json())
      .then((data) => {
        const dataCopy = data.meals;
        if (dataCopy !== null) {
          setResults(dataCopy);
          setErrorMsg('');
        // } else if (search.length === 0) {
        //   setResults([]);
        //   console.log(`Please fill out this field.`);
        //   // setErrorMsg(`Please fill out this field.`);
        } else {
          setResults([]);
          setErrorMsg(`Sorry, we couldn't find any results for "${search}".`);
        }
      })
      .catch(error => console.log(error));
    }
  };


  return (
    <BrowserRouter>
      <div className="app">
          <Header></Header>
        <Routes>
          <Route path='/favorites' element={<FavoriteList></FavoriteList>}></Route>
          <Route path='/search' element={<Search
            search={search} 
            findData={findData} 
            handleSearch={handleSearch} 
            results={results} 
            errorMsg={errorMsg}>
            </Search>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
