import s from './Modal.module.css';
import {Component} from 'react';
import {createPortal} from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
    componentDidMount(){
        window.addEventListener('keydown', this.handleKeyDown)
    }

    componentDidUpdate(){
        window.removeEventListener('keydown', this.handleKeyDown)
    }

    handleKeyDown = e => {
        if(e.code === 'Escape'){
            this.props.onClose();
        }
    }

    clickOnBackdrop = e => {
        if (e.currentTarget === e.target) {
            this.props.onClose();
        }
    }

    render(){
        return(
            createPortal(
                <div className={s.Overlay} onClick={this.clickOnBackdrop}>
                    <div className={s.Modal}>
                        <img src={this.props.largeImageURL} alt="" />
                    </div>
                </div>, 
                modalRoot)
        )
    }
}
export default Modal;
