function ResultList ({search}) {

    return (
        <div className="result-card">
            {/* <div className="poster-wrapper">
                {search.strMealThumb ? (
                    <img src={`${search.strMealThumb}`} alt={`${search.strMeal} Poster`}></img>
                ) : (
                    <div className="filler-poster"></div>
                )}
            </div> */}

            <div className="info">
                <h3 className="title">{search.strMeal}</h3>
            </div>
        </div>
    )
}

export default ResultList;