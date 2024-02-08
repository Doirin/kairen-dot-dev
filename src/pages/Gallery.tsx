import {NavLink, useOutlet} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import {getStorage, listAll, ref} from "firebase/storage";
import {FolderObject} from "../interfaces/FolderObject";
function Gallery() {
    const Storage = getStorage();
    const StorageRef = ref(Storage, "gallery");
    const [GalleriesLoaded, setGalleriesLoaded] = useState(false);
    let galleryList = useRef(Array(0));
    useEffect(() => {
        listAll(StorageRef).then(r => {
            let idCounter = 0;
            r.prefixes.forEach(folder => {
                if (galleryList.current.find((item: FolderObject) => item.name === folder.name) === undefined) {
                    galleryList.current.push({
                        id: idCounter,
                        name: folder.name
                    })
                    idCounter++;
                }
            });
            setGalleriesLoaded(true);
        })
    });

    const outlet = useOutlet();

    if (!GalleriesLoaded) {
        return <></>;
    }
    return (
        <>
            <nav className="modalNavbar">
                <ul>
                    {galleryList.current.map((link) => (
                        <li key={link.id}>
                            <NavLink
                                to={`${link.name}`}
                                className={({isActive}) =>
                                    isActive ? "navButton active" : "navButton"
                                }
                            >
                                {`${link.name}`}
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