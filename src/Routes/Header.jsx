import { Link } from "react-router-dom";

export default function Header () {

    return (
        <header>
            <div className="header-container">
                <div className="content">
                    <div>
                        <Link className="logo" to='/search'>MealLOGO</Link> 
                    </div>
                    <ul className="links">
                        <li>
                            <Link className="button" to='/favorites'>My Favorites</Link>
                        </li>

                        <li>
                            <Link className="button" to='/search'>More recipes</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}