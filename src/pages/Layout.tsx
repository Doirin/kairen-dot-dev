import {useOutlet, useLocation, NavLink} from "react-router-dom";
import {SwitchTransition, CSSTransition} from "react-transition-group";
function Layout() {
    const location = useLocation();
    const currentOutlet = useOutlet();
    const links = [
        {
            id: 0,
            title: "Home",
            path: "/",
        },
        {
            id: 1,
            title: "Fursona Info",
            path: "/info",
        },
        {
            id: 2,
            title: "Gallery",
            path: "/gallery"
        },
        {
            id: 3,
            title: "Socials",
            path: "/socials",
        },
    ];
    // document.getElementById('navbarButton3').setAttribute()
    return (
        <>
            <div className="navbar">
                <nav>
                    <ul>
                        {links.map((link) => (
                            <li key={link.id} id={'navbarButton'+link.id.toString()}>
                                <NavLink
                                    to={`${link.path}`}
                                    className={({ isActive }) =>
                                        isActive ? "navButton active" : "navButton"
                                    }
                                >
                                    {`${link.title}`}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <div className="content">
                    <SwitchTransition>
                        <CSSTransition
                            key={location.pathname}
                            timeout={500}
                            classNames="page"
                            unmountOnExit
                        >
                            {() => (
                                <div className="page">
                                    {currentOutlet}
                                </div>
                            )}
                        </CSSTransition>
                    </SwitchTransition>
            </div>
        </>
    )
};

export default Layout;