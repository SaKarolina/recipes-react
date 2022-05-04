function ResultList ({search}) {

    return (
        <div className="result-cards">
            <div className="card">
                <div className="poster-wrapper">
                    {search.strMealThumb ? (
                        <img className="poster-img" src={`${search.strMealThumb}`} alt={`${search.strMeal}`}></img>
                    ) : (
                        <div className="filler-poster"></div>
                    )}
                </div>

                <div className="info">
                    <div className="info-header">
                        <h3 className="title">{search.strMeal}</h3>
                        <div className="heart" style={{width: '2em'}}></div>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>Ingredients</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {Object.keys(search).map ((element, i) => element.substring(0, 13) === 'strIngredient' && (
                                        <li key={i}>{search[element]}</li>
                                    ))}
                                </td>
                                <td>
                                    {Object.keys(search).map ((element, i) => element.substring(0, 10) === 'strMeasure' && (
                                        <li key={i}>{search[element]}</li>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th>Instructions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    {search.strInstructions}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ResultList;