import { useEffect, useState } from "react";

export default function FavoriteList({search}) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("favorite");
    if (data === null) {
      localStorage.setItem("favorite", JSON.stringify([]));
      setFavorites([]);
    } else {
      setFavorites(JSON.parse(data));
    }
  }, []);

  const deleteFavorite = (idMeal) => {
    const newData = favorites.filter((favorite) => favorite.idMeal !== idMeal);
    localStorage.setItem("favorite", JSON.stringify(newData));
    setFavorites(newData);
  };

// useEffect(() => {
//     const newFavMeals = JSON.parse(localStorage.getItem("favorite"));

//     if (newFavMeals) {
//         setFavorites(newFavMeals);
//         console.log(newFavMeals);
//     }
//   }, []);

  return (
    <div>
      <h1>My Favorites</h1>

      <div className="meals">
        {" "}
        {favorites.map((search) => (
          <div key={search.idMeal}>
            <img alt={search.strMeal} src={`${search.strMealThumb}`} />

            <h4>{search.strMeal}</h4>

            <button onClick={() => deleteFavorite(search.idMeal)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}
