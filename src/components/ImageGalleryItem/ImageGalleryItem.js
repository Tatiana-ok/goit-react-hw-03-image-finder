import s from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export default function ImageGalleryItem ({largeImageURL = '', dataSource = '', handleImgClick}){
    return(
        <li className={s.ImageGalleryItem} onClick={()=> handleImgClick(largeImageURL)}>
            <img src={dataSource} alt="" className={s.ImageGalleryItemImage}/>
        </li>
    )
};

ImageGalleryItem.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    dataSource: PropTypes.string.isRequired
}