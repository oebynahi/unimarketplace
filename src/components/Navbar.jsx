import "./Navbar.css"
import favicon from "../../public/favicon.svg"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-left-cluster">
                <h3 className="logo-text">1DE</h3>
            </div>
            <div className="navbar-middle-cluster">
                <h3 className="category-page-text">Browse</h3>
                <h3 className="category-page-text">My listings</h3>
                <h3 className="category-page-text">Chat</h3>
            </div>
            <div className="navbar-right-cluster">
                <button className="button">+ Create</button>
                <img src={favicon} alt="profile icon" className="profile-logo"/>
            </div>
        </nav>
    )
}