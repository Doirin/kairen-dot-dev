import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import {useParams} from "react-router-dom";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../firebaseConfig";
import {useEffect, useRef, useState} from "react";

function GalleryModal() {
    initializeApp(firebaseConfig);
    const {galleryName} = useParams();
    const storage = getStorage();
    const storageRef = ref(storage, galleryName);
    const [downloadUrl, setDownloadUrl] = useState('');
    let tempUrls = useRef([]);

    useEffect(() => {
        listAll(storageRef).then(r => {
            r.items.forEach(file => {
                getDownloadURL(file).then(downloadURL => {
                    tempUrls.current.push(downloadURL)
                    setDownloadUrl(downloadURL)
                });
            })
        })
    }, []);
    return (
        <>
            <div className='gallery'>
                {
                    tempUrls.current.map((imageSrc) => {
                        return (
                            <div key={imageSrc} className='img-container'>
                                <img className='galleryImg' src={imageSrc}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )

}
export default GalleryModal;