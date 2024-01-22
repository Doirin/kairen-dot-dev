import {useOutlet, useLocation, NavLink} from "react-router-dom";
import {SwitchTransition, CSSTransition} from "react-transition-group";
const Layout = () => {
    const location = useLocation();
    const currentOutlet = useOutlet();
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Fursona Info",
            path: "/info",
        },
        {
            title: "Gallery",
            path: "/gallery",
        },
        {
            title: "Socials",
            path: "/socials",
        },
    ];

    return (
        <>
            <div className="navbar">
                <nav>
                    <ul>
                        {links.map((link) => (
                            <li key={link.id}>
                                <NavLink
                                    to={`${link.path}`}
                                    className={({ isActive, isPending }) =>
                                        isActive
                                            ? "active"
                                            : isPending
                                                ? ""
                                                : ""
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
                            timeout={1000}
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