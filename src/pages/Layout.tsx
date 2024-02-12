import {useOutlet, useLocation, NavLink} from "react-router-dom";
import {SwitchTransition, CSSTransition} from "react-transition-group";
import {useEffect, useRef, useState} from "react";
import {getStorage, listAll, ref} from "firebase/storage";
import {FolderObject} from "../interfaces/FolderObject";
function Layout() {
    const Storage = getStorage();
    const StorageRef = ref(Storage, "gallery");
    const [, setGalleriesLoaded] = useState(false);
    const Location = useLocation();
    const CurrentOutlet = useOutlet();
    const Links = useRef([
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
            title: "Socials",
            path: "/socials",
        },
    ]);
    let gallery = useRef({
            id: 3,
            title: "Gallery",
            path: "/gallery",
            children: Array<FolderObject>(0)
    });

    useEffect(() => {
        listAll(StorageRef).then(r => {
            let idCounter = 4;
            r.prefixes.forEach(folder => {
                if (gallery.current.children.find((item: FolderObject) => item.name === folder.name) === undefined) {
                    gallery.current.children.push({
                        id: idCounter,
                        name: folder.name
                    })
                    idCounter++;
                }
            });
            gallery.current.children.sort();
            setGalleriesLoaded(true);
        })
    });

    return (
        <>
            <div className="navbar">
                <nav>
                    <ul>
                        {Links.current.map((link) => (
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
                        <li id={'navbarButton'+gallery.current.id.toString()} className='dropdown' >
                            <NavLink to={`/gallery`}
                                     className={({ isActive }) =>
                                         isActive ? "navButton active" : "navButton"
                                     }> Gallery
                                <p className='arrow down'></p>
                                <div className='dropdown-content'>
                                    {gallery.current.children.map((folder) => (
                                        <NavLink key={folder.name} to={`/gallery/${folder.name}`}>
                                            {folder.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                    <SwitchTransition>
                        <CSSTransition
                            key={Location.pathname}
                            timeout={500}
                            classNames="page"
                            unmountOnExit
                        >
                            {() => (
                                <div className="page">
                                    {CurrentOutlet}
                                </div>
                            )}
                        </CSSTransition>
                    </SwitchTransition>
            </div>
        </>
    )
}

export default Layout;