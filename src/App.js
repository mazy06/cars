import { Component } from 'react';
import './App.css';
import MyCars from './component/MyCars';

class App extends  Component {

  state = {
    titre : 'Mon Catalogue voiture',
    color : 'green'
  }

  changeTitle = (e) => {
    this.setState({
      titre : 'Mon nouveau titre'
    })
  }

  changeViaParam = (titre) => {
    this.setState({
      titre : titre
    })
  }

  changeViaBind = (param) => {
    this.setState({
      titre : param
    })
  }
  changeViaInput = (e) => {
    this.setState({
      titre : e.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <MyCars 
          color={this.state.color}
          title={this.state.titre} 
        />
        <button onClick={this.changeTitle}>Changer le titre</button>
        <button onClick={() => this.changeViaParam('Nouveau titre via param')}>Changer le titre via param</button>
        <button onClick={this.changeViaBind.bind(this, 'Nouveau titre via Bind')}>Changer le titre via bind</button>
        <input type='text' onChange={this.changeViaInput} value={this.state.titre}/>
      </div>
    );
  }


}

export default App;
