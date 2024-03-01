import {useLocation, useOutlet} from "react-router-dom";
function Gallery() {
    const Outlet = useOutlet();
    const Location = useLocation();
    if (Location.pathname === '/gallery') {
        return (
            <>
                <div className="modalContent">
                    <img src='/logo192.png' alt='Kairen Icon'/>
                </div>
            </>
        )
    }
    return (
        <>
            <div className="modalContent">
                {Outlet}
            </div>
        </>
    )
}

export default Gallery;