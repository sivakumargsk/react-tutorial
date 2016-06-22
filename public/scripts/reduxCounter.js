/*
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

*/
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const { createStore } = Redux;
const store =createStore (counter);

var Counter = React.createClass ({
  render: function () {
    return (
      <div>
        <h2> Redux & React Counter </h2>
        <div>{this.props.value}</div>
        <input type="button" value="+" onClick = {this.props.onIncrement}/>
        <input type="button" value="-" onClick = {this.props.onDecrement}/>
      </div>
    );
  }
});


function render() {
  ReactDOM.render (
    <Counter
      value={store.getState()}
      onIncrement={function (){
                     store.dispatch({ type: 'INCREMENT' })}
                    }
      onDecrement={function () {
                     store.dispatch({ type: 'DECREMENT' })}
                    }
      />,
      document.getElementById('content')
    );
  }

store.subscribe(render);
render();
