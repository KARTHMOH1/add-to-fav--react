import { Link } from "react-router-dom"
import './index.css'
function Header() {
    return (
        <>
            <ul>
                <li><Link to="/">Person List</Link></li>
                <li> <Link to="/list">Favourite Person</Link></li>
            </ul>
        </>
    )
}

export default Header 