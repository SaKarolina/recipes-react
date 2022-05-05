import { useEffect, useState } from "react";

export default function FavoriteList({ search }) {
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

  return (
    <div className="app">
      <div className="fav-container">
        <h1>My Favorites</h1>
        {favorites.map((search) => (
          <div key={search.idMeal}>
            <div className="result-cards">
              <div className="card">
                <div className="poster-wrapper">
                  <div className="heart" style={{width: '2em'}} onClick={() => deleteFavorite(search.idMeal)}></div>
                  <img
                    className="poster-img"
                    alt={search.strMeal}
                    src={`${search.strMealThumb}`}
                  />
                </div>

                <div className="info">
                  <div className="info-header">
                    <div className="title">
                      <h4>{search.strMeal}</h4>
                    </div>
                  </div>

                  <table className="info-table">
                    <thead>
                      <tr>
                        <th colSpan="2" className="table-title">
                          Ingredients
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {Object.keys(search).map(
                            (element, i) =>
                              element.substring(0, 13) === "strIngredient" && (
                                <li className="list" key={i}>
                                  {search[element]}
                                </li>
                              )
                          )}
                        </td>
                        <td>
                          {Object.keys(search).map(
                            (element, i) =>
                              element.substring(0, 10) === "strMeasure" && (
                                <li key={i}>{search[element]}</li>
                              )
                          )}
                        </td>
                      </tr>
                    </tbody>
                    <thead>
                      <tr>
                        <th colSpan="2" className="table-title">
                          Instructions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan="2" className="instruction">
                          {search.strInstructions}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
