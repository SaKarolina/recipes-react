import ResultList from "../Components/ResultList";

export default function Search ({search, findData, results}) {

    return (
        <div>
            <h1>Search</h1>
            <div className="search">
                <input type='search' name='search' id='search' placeholder='Search for a recipe' value={search} onChange={findData}></input>
            </div>
{/* 
            <div className="recipes-list">
                <ul className="results">
                    {results.length > 0 ? results.map (recipe => (
                        <li key={recipe.idMeal}>
                            <ResultList search={recipe}></ResultList>
                        </li>
                    )) : ''}
                </ul>
            </div> */}

            {
                results && <ResultList search={results}></ResultList>
            }
        </div>
    )
}