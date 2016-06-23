
function todoApp (state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
    return state.concat([action.value])
    default:
    return state
  }
}

const store = Redux.createStore (todoApp);

var TodoDemo = React.createClass ({
    render: function () {
    return (
      <div>
        <input id="taskInput" type="text" />
        <input type="button" value="Add task" onClick = {this.props.addTask} />
        <ul> {this.props.listdata.map(function (i){
          return (<li>{i}</li>);
        })}
        </ul>
      </div>
    );
  }
});

function render() {
  ReactDOM.render (
    <TodoDemo
      listdata={store.getState()}
      addTask={function (){
                     store.dispatch({ type: 'ADD_TODO',
                                      value: document.getElementById('taskInput').value })}
                    }
      />,
      document.getElementById('content')
    );
}

store.subscribe(render);
render();
