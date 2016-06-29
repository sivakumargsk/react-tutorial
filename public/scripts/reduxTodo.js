
var idx = 0;


// todo reducer

const todos = function (state = [], action) {
  switch (action.type) {
  case 'ADD_TODO':
    return state.concat(
      [{taskName: action.taskName,
        taskId: idx++,
        completed: false}])

  case 'TOGGLE_TODO':
    return state.map(function (i) {
      if (i.taskId == action.index) {
         return Object.assign({}, i, {completed: !i.completed }); }
      else {
         return i; }
    });
  default:
    return state
  }
}

// visibilityFilter reducer

const visibilityFilter = function (state = 'SHOW_ALL', action){
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}

// combining to reducers

const todoApp = Redux.combineReducers({
  todos,
  visibilityFilter
});

// this a simple function which takes todos and show in a our needs

function getVisibleTodos (todos, filter){
  switch (filter) {
    case 'SHOW_ALL':
      return todos;

    case 'SHOW_COMPLETED':
      return todos.filter(function (i){
        return i.completed; }
      );
    case 'SHOW_ACTIVE':
     return todos.filter(function (i){
       return !i.completed; }
     );
     default:
      return todos;
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
    const visibleTodos = getVisibleTodos (
      this.props.todos,
      this.props.visibilityFilter
    );
    return (
        <div>
        <input id="taskInput"
               type="text" />
        <input type="button"
               value="Add task"
               onClick = {this.addTodo} />
        <input type='button'
               value='Show All'
               onClick = {function (){
                 store.dispatch({ type: 'SET_VISIBILITY_FILTER',
                                  filter: 'SHOW_ALL'});}} />
        <input type='button'
               value='Completed'
               onClick = {function (){
                 store.dispatch({ type: 'SET_VISIBILITY_FILTER',
                                  filter: 'SHOW_COMPLETED'});}} />
        <input type='button'
               value='Active'
               onClick = {function (){
                 store.dispatch({ type: 'SET_VISIBILITY_FILTER',
                                  filter: 'SHOW_ACTIVE'});}} />
        <ul>
        {visibleTodos.map(function (i){
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
    <TodoDemo
    todos={store.getState().todos}
    visibilityFilter={store.getState().visibilityFilter} />,
    document.getElementById('content'));
}

store.subscribe(render);
render();
