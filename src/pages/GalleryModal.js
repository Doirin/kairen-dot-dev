import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";
import {useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";

function GalleryModal() {
    const {galleryName} = useParams();
    const Storage = getStorage();
    const GalleryRef = ref(Storage, 'gallery/'+galleryName);
    const ThumbnailsRef = ref(Storage, 'thumbnails/'+galleryName);
    const [ThumbnailUrl, setThumbnailUrl] = useState('');
    const [GalleryUrl, setGalleryUrl] = useState('');
    let galleryUrls = useRef([]);
    let thumbnailUrls = useRef([]);

    useEffect(() => {
        listAll(GalleryRef).then(r => {
            r.items.forEach(file => {
                getDownloadURL(file).then(downloadURL => {
                    galleryUrls.current.push(downloadURL);
                    setGalleryUrl(downloadURL);
                    galleryUrls.current.sort();
                });
            })
        })
    }, []);

    useEffect(() => {
        listAll(ThumbnailsRef).then(r => {
            r.items.forEach(file => {
                getDownloadURL(file).then(downloadURL => {
                    thumbnailUrls.current.push(downloadURL);
                    setThumbnailUrl(downloadURL);
                    thumbnailUrls.current.sort();
                });
            })
        })
    }, []);
    return (
        <>
            <div className='gallery'>
                {
                    galleryUrls.current.map((galleryURL, index) => {
                        return (
                                <div id={galleryURL} className='img-container'>
                                    <a className='img-link' href={galleryURL} target='_blank' rel='noreferrer'>
                                        <img className='galleryImg' src={thumbnailUrls.current.at(index)} alt={thumbnailUrls.current.at(index)}/>
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