import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div className="navbar">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/info">Character Info</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Fursuiting Gallery</Link>
                        </li>
                        <li>
                            <Link to="/socials">Socials</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <Outlet/>
            </div>
        </>
    )
};

export default Layout;