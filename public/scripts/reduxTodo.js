
var idx = 0;

function todoApp (state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat([{taskName: action.taskName,
                          taskId: idx++,
                          completed: false} ])
  case 'TOGGLE_TODO':
    return state.map(function (i) {
      if (i.taskId !== action.index){
        return i;
      }
      return Object.assign({}, i, {
        completed: !i.completed
      })
    })

  case 'SHOW_ACTIVE':
    return state.filter(function (i){
      if (i.completed == false){
        return true;
      }else{
        return false;
      }
    })
  case 'SHOW_COMPLETED':
    return state.filter(function (i){
      if (i.completed == true){
        return true;
      }else{
        return false;
      }
    })
  case 'SHOW_ALL':
    return state
    default:
    return state
  }
}

const store = Redux.createStore (todoApp);

var TodoDemo = React.createClass ({

  addTodo: function () {
     store.dispatch({ type: 'ADD_TODO',
                      taskName: document.getElementById('taskInput').value });
    document.getElementById('taskInput').value = '';
  },
  render: function () {
    return (
        <div>
        <input id="taskInput"
               type="text" />
        <input type="button"
               value="Add task"
               onClick = {this.addTodo} />
        <input type='button'
               value='Show All'
               onClick = {function (){store.dispatch({ type: 'SHOW_ALL'});}} />
        <input type='button'
               value='Completed'
               onClick = {function (){store.dispatch({ type: 'SHOW_COMPLETED'});}} />
        <input type='button'
               value='Active'
               onClick = {function (){store.dispatch({ type: 'SHOW_ACTIVE'});}} />
        <ul>
        {this.props.listdata.map(function (i){
           return (<li
                   key={i.taskId}
                   style={{textDecoration: i.completed ? 'line-through' : 'none',
                           cursor: 'pointer'}}
                      onClick={function (){
                                 store.dispatch({ type: 'TOGGLE_TODO',
                                                  index: i.taskId});}}>
                   {i.taskName}</li>);})}
         </ul>
        </div>
    );
  }
});

function render() {
  ReactDOM.render (
    <TodoDemo listdata={store.getState()}/>,
    document.getElementById('content'));
}

store.subscribe(render);
render();
