
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
    return (
      <div className = "CommentList">
        <Comment author="Pete Hunt">This is one comment</Comment>
        <Comment author="Jordan Walke">This is *another* comment</Comment>
      <Comment author="Pete Hunt">This is one comment</Comment>  
      </div>
    );
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
         <CommentList />
         <CommentForm />
      </div>
    );
  }
});

ReactDOM.render (
  <CommentList/>,
  document.getElementById('content')
);
