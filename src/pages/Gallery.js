import {NavLink, useOutlet} from "react-router-dom";
const Gallery = () => {
    const outlet = useOutlet();
    const links = [
        {
            id: 0,
            title: "Furtecowo",
            path: "Furtecowo",
        },
        {
            id: 1,
            title: "SFFW",
            path: "sffw",
        }
    ];

    return (
        <>
            <nav className="modalNavbar">
                <ul>
                    {links.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                to={`${link.path}`}
                                className={({isActive}) =>
                                    isActive ? "active" : ""
                                }
                            >
                                {`${link.title}`}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="modalContent">
                {outlet}
            </div>
        </>
    )
};

export default Gallery;