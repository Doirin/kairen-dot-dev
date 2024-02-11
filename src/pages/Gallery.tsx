import {useOutlet} from "react-router-dom";
function Gallery() {
    const Outlet = useOutlet();

    return (
        <>
            <div className="modalContent">
                {Outlet}
            </div>
        </>
    )
};

export default Gallery;