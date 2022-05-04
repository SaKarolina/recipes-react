import ResultList from "../Components/ResultList";

export default function Search ({search, findData, results, handleSearch, errorMsg, addFavorite}) {

    const submit = (event) => {
        event.preventDefault();
        findData();
    }

    return (
        <div className="search-container">
            <form className="search-row" onSubmit={submit}>
                <input type='search' autoComplete="off" placeholder='Search your dish' value={search} onChange={handleSearch}></input>
                <input type='submit' value="search" className="btn" onClick={findData}></input>
            </form>

            <div className="recipes-list">
                <ul className="results">
                    {results.length > 0 ? results.map (recipe => (
                        <li key={recipe.idMeal}>
                            {results && <ResultList search={recipe} addFavorite={addFavorite}></ResultList>}
                        </li>
                    )) : (<div className="error">{errorMsg}</div>)}
                </ul>
            </div>

        </div>
    )
}