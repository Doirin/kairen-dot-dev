import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

function GalleryModal() {
    const {galleryName} = useParams();
    const Storage = getStorage();
    const GalleryRef = useRef(ref(Storage, 'gallery/'+galleryName));
    const ThumbnailsRef = useRef(ref(Storage, 'thumbnails/'+galleryName));
    const [, setRenderState] = useState('');
    let galleryUrls = useRef(Array(0));
    let thumbnailUrls = useRef(Array(0));

    useEffect(() => {
        listAll(GalleryRef.current).then(r => {
            r.items.forEach(file => {
                getDownloadURL(file).then(downloadURL => {
                    galleryUrls.current.push(downloadURL);
                    galleryUrls.current.sort();
                    if(r.items.length === galleryUrls.current.length && galleryUrls.current.length === thumbnailUrls.current.length) {
                        setRenderState(downloadURL);
                        console.log('finished')
                    }
                });
            })
        })
        listAll(ThumbnailsRef.current).then(r => {
            r.items.forEach((file, index) => {
                getDownloadURL(file).then(downloadURL => {
                    thumbnailUrls.current.push(downloadURL);
                    thumbnailUrls.current.sort();
                    if(r.items.length === thumbnailUrls.current.length && galleryUrls.current.length === thumbnailUrls.current.length) {
                        setRenderState(downloadURL);
                        console.log('finished')
                    }
                });
            })
        })
    }, []);
    
    return (
        <>
            <div className='gallery'>
                {
                    thumbnailUrls.current.map((thumbnailURL, index) => {
                        return (
                                <div key={galleryUrls.current.at(index)} className='img-container'>
                                    <a className='img-link' href={galleryUrls.current.at(index)} target='_blank' rel='noreferrer'>
                                        <img className='galleryImg' src={thumbnailURL} alt='imageThumbnail'/>
                                    </a>
                                </div>
                        )
                    })
                }
            </div>
        </>
    )

}
export default GalleryModal;