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
                    <h3 className="title">{search.strMeal}</h3>
                    <div className="heart" style={{width: '2em'}}></div>
                    {/* <table>
                        <tr>
                            <td>Ingredients</td>
                            <td>Instructions</td>
                        </tr>
                    </table> */}
                </div>
            </div>
        </div>
    )
}

export default ResultList;