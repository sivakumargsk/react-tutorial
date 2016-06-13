
var data = [
  {id: 1, author: "Pete Hunt", text: "this is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}];

var Comment = React.createClass ({
  rawMarkup: function(){
    var md = new Remarkable ();
    var rawMarkup = md.render(this.props.children.toString());
    return { __html: rawMarkup};
  },
  render: function () {
    return (
      <div className = "comment">
        <h2 className = "commentAuthor">
          {this.props.author}
        </h2>
       <span dangerouslySetInnerHTML = {this.rawMarkup()} />
      </div>
    );
  }
});

var CommentList = React.createClass ({
  render: function () {
    var commentNode = this.props.data.map(function (comment){
      return (
        <Comment author={comment.author} key={comment.id}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="CommentList">
       {commentNodes}
      </div>
    )
  }
});

var CommentForm = React.createClass ({
  render: function () {
    return (
      <div className = "CommentForm">
      Hello, World! i am CommentForm.
      </div>
    );
  }
}
);

var CommentBox = React.createClass({
  render: function(){
    return (
      <div className="CommentBox">
         <h1> Comments</h1>
         <CommentList data={this.props.data}/>
         <CommentForm />
      </div>
    );
  }
});

ReactDOM.render (
  <CommentBox data={data} />,
  document.getElementById('content')
);
