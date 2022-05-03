import ResultList from "../Components/ResultList";

export default function Search ({search, findData, results, handleSearch, errorMsg}) {

    const submit = (event) => {
        event.preventDefault();
        findData();
    }

    return (
        <div className="search-container">
            {/* <h1 className="search-title">Search</h1> */}
            <form className="search-row" onSubmit={submit}>
                <input type='search' autoComplete="off" name='search' id='search' placeholder='Search your dish' value={search} onChange={handleSearch}></input>
                <input type='submit' value="search" className="btn" onClick={findData}></input>
            </form>

            <div className="recipes-list">
                <ul className="results">
                    {results.length > 0 ? results.map (recipe => (
                        <li key={recipe.idMeal}>
                            {results && <ResultList search={recipe}></ResultList>}
                        </li>
                    )) : (<div>{errorMsg}</div>)}
                </ul>
            </div>

        </div>
    )
}