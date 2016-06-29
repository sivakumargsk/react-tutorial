var Counter = React.createClass ({
  getInitialState: function () {
    return {count: 0};
  },
  increseCounter: function () {
    this.setState ({count: this.state.count + 1});
  },
  decreaseCounter: function () {
    this.setState ({count: this.state.count - 1});
  },
  render: function () {
    return (
      <div>
      <div>{this.state.count}</div>
      <input type="button" value="+" onClick={this.increseCounter} />
      <input type="button" value="-" onClick={this.decreaseCounter} />
      </div>
     );
  }
});

ReactDOM.render(
  <Counter />,
  document.getElementById('content')
);
