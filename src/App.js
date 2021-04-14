
import './App.css';
import React,{ Component } from 'react';
import ImgSrcm from './img/profil.png';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class App extends Component {
 
constructor(props){
super(props);
this.state = {
FullName:" ",
Bio:" ",
Profession:" ",
Shows: true,
Seconds: 1 };
}
componentDidMount() {
  this.timer = setInterval(() => {
    this.setState({ Seconds: this.state.Seconds + 1 });
  }, 1000);
}

Afficher = () => {
  if (this.state.Shows==true){
    this.setState({FullName: "Nadine"});
    this.setState({Bio: "MyBio"});
    this.setState({Profession: "MyProfession"});
    this.setState({ImgSrcm});
        } else {
    alert ("la valeur de shows est false !");

    };
 
  }
  
  componentWillUnmount() {
    clearInterval(this.timer);
  }



 render() { 
   return (

<div className="App">
   <h1>Number of seconds is {this.state.Seconds}</h1>
   <h1> {this.state.FullName}</h1>
   <h1> {this.state.Bio}</h1>
   <h1> {this.state.Profession}</h1>
   <img src={this.state.ImgSrcm}/>
   <h1>{this.state.Shows}</h1>
   <button type="button" onClick={this.Afficher}> Cliquez ici pour Afficher</button>


    </div>
    );

 }
  
}


export default App;
