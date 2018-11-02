import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stockname: [],
      received:false
    };
  }
  componentWillMount() {
    let wsInit;
    wsInit = new WebSocket('ws://localhost:8000');
    wsInit.onopen = () => {
      console.log("hello");
    }
    wsInit.onmessage = (eve) => {
      console.log(eve.data);
      this.setState({ stockname:JSON.parse(eve.data),received:true });
    }
  }
  render() {
    return (
      <div>
        {this.state.received? <div>{

          this.state.stockname.map((stocklist) =>
            <div>
            <span className='stockname'>{stocklist.stock}</span>&nbsp;
            <span className='stockprice'>{stocklist.price}</span>
          </div>

          )}</div> : <div></div>}
      </div>

    );
  }
}

export default App;
