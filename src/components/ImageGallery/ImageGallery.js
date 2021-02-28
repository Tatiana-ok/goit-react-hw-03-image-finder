import s from "./ImageGallery.module.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import pixabayApi from '../../services/pixabayAPI';
import {Component} from 'react';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';

class ImageGallery extends Component {
    state = {
        search: [],
        modal: false,
        modalImg: '',
        page: 1,
        error: null,
        loader: false
    }
    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.value;
        const nextName = this.props.value;
        const prevPage = prevState.page;
        const nextPage = this.state.page;

        if (prevName !== nextName) {
            this.setState({ loader: true });
                pixabayApi
            .fetchPixabayAPI(nextName, nextPage)
            .then(response => {
                if(response.hits.length === 0){
                    this.setState({error: 'No images'})
                };
                this.setState({search: response.hits})})
            .catch(error => this.setState({ error}))
            .finally(()=> {
                this.setState({loader:false})
            })
        }

        if (prevPage !== nextPage) {
            this.setState({ loader: true });
            pixabayApi
                .fetchPixabayAPI(nextName, nextPage)
                .then(response => this.setState(prevState =>({search: [...prevState.search, ...response.hits]})))
                .catch(error => this.setState({error}))
                .finally(()=>{
                    this.setState({ loader: false });
                    window.scrollTo({                 
                        top: document.documentElement.scrollHeight,                 
                        behavior: 'smooth'})
                })
        }
    }

    handleImgClick = img => {
        this.setState({modalImg: img, modal: true})
    }

    toggleModal = () => {
        this.setState({modal: false});
    }

    onHandleClick = () => {
        this.setState({page: this.state.page + 1});
    }

    render() {
        const {modal, error, loader, search} = this.state;

        return(
            <>
                <ul className={s.ImageGallery}>
                    {this.state.search.map(({id, largeImageURL, webformatURL}) =>(
                        <div key={id} >
                            <ImageGalleryItem largeImageURL={largeImageURL} dataSource={webformatURL} handleImgClick={this.handleImgClick}/>
                        </div>
                    ))}
                </ul>
                {search.length>0 && <Button onHandleClick={this.onHandleClick} />}
                {modal && <Modal largeImageURL={this.state.modalImg} onClose={this.toggleModal}/>}
                {loader && <div className={s.Loader}>
                    <Loader type="ThreeDots" color="#FF1493" height={80} width={80} timeout={3000} />
                </div>}
                {error && <div className={s.Error}><h2>Произошла ошибка, повторите поиск/An error occurred, please try again</h2></div>}
            </>
        )
    }
}

export default ImageGallery;
