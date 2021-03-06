function ResultList({ search, addFavorite }) {
    return (
        <div className="card">
            <div className="poster-wrapper">
                <span className="heart" onClick={() => addFavorite(search)}>
                    &#10084;
                </span>
                {search.strMealThumb ? (
                    <img
                        className="poster-img"
                        src={`${search.strMealThumb}`}
                        alt={`${search.strMeal}`}
                    ></img>
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div>

            <div className="info">
                <div className="info-header">
                    <h3 className="title">{search.strMeal}</h3>
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
    );
}

export default ResultList;
