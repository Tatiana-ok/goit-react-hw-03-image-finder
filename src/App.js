import './App.css';
import {Component} from 'react';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

class App extends Component {
  state = {
    search: ''
  }

  handleSubmit = text => {
    this.setState({search: text})
  }

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery value={this.state.search}/>
      </div>
    )
  }
  
}



export default App;
