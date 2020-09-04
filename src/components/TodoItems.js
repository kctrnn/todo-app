import React from 'react';
import './TodoItems.css';

class TodoItems extends React.Component {
    
  render() {
    return (
      <div className="TodoItems">
          {this.props.items.map((item, index) => <p key={index}>{item.title}</p>)}
      </div>
    );
  }
}

export default TodoItems;
