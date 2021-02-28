import s from './Button.module.css';

function Button ({onHandleClick}){
    return(
        <div className={s.containerButton}>
            <button className={s.Button} type="button" onClick={onHandleClick}>Load more</button>
        </div>
    )
}

export default Button;