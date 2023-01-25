import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';





class Arrow extends React.Component{
  constructor(props){
    super(props)
    this.state={
      direction:props.direction,
      value:props.value
    }

    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(e){
    a
    document.getElementById("text").innerHTML = this.state.value
  }


  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.value}</button>

      </div>
    ) 
  }

}






class Controller extends React.Component{
    constructor(props){
      super(props)
      this.state = {

      }
    }

    render(){

      // Direction           up -> 0          down -> 1


      return(
        <div>
          <Arrow direction={0} value="UP"></Arrow>
          <Arrow direction={1} value="DOWN"></Arrow>

        </div>
        )
    }


}







function App() {
  return (
    <div>
      <Controller></Controller>
      <a id="text"></a>
    </div>
  );
}





export default App;
