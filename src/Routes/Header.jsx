import { Link } from "react-router-dom";

export default function Header () {

    return (
        <header>
            <div className="container">
                <div className="content">
                    <div>
                        <Link to='/search'>Recipes</Link> 
                    </div>
                    <ul className="links">
                        <li>
                            <Link to='/favorites'>My Favorites</Link>
                        </li>

                        <li>
                            <Link className="button" to='/search'>Search</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}