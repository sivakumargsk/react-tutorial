// Todo Application using React.js

/*
For that i created Three Components
one for add new task (input + add button)
and another for show the all created tasks.
show the above two in one component.
*/

var data = [{id: 1, text: "Learning React"},
            {id: 2, text: "Learning Redux"}];

var AddTODO = React.createClass ({
  addOnClick : function (){
    this.props.data.concat({id: 3, text: "Learning clojure"});
    },
  render: function () {
    return (
      <div>
        <input type ="text" />
        <input type = "button" value="Add" onClick = {this.addOnClick}/>
      </div>
      );
    }
});

var Task = React.createClass ({
  render: function () {
    return (
      <div>
      <p id={this.props.id}>{this.props.children}</p>
      </div>
    );
  }
});

var ShowTODO = React.createClass ({
  render: function () {
    var taskNodes = this.props.data.map(function (task){
      return (
        <Task id={task.id}> {task.text}</Task>
      );
    });
    return (
      <div>
      {taskNodes}
      </div>
    );
  }
});

var TodoBox = React.createClass ({
  render: function () {
    return (
      <div >
        <AddTODO data= {this.props.data}/>
        <ShowTODO data={this.props.data}/>
      </div>
    );
  }
});

ReactDOM.render (
  <TodoBox data={data}/>,
  document.getElementById('content')
);
