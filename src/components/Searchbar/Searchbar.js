import s from './Searchbar.module.css';
import {Component} from 'react';

class Searchbar extends Component {
   
    state = {
        search: '',
    }

    onChange = (e) =>{
        this.setState({search: e.currentTarget.value})
    }

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state.search);
    }

    render(){
        return(
            <header className={s.Searchbar}>
                <form className={s.SearchForm} onSubmit={this.onSubmit}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>
                    <input
                    className={s.SearchFormInput}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    value={this.state.search}
                    onChange={this.onChange}
                    />
                </form>
            </header>
            )
    }
    
}

export default Searchbar;