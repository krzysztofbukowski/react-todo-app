import * as React from 'react';
import './TodoList.css';

interface ITodoListItemProps {
    label: string
}

class TodoListItem extends React.Component<ITodoListItemProps> {
  public render() {
      return (
          <li className="todo-list__item">
              <a className="todo-list__item-label">{this.props.label}</a>
              <div className="todo-list__item-actions">
                  <a className="action action--danger">Remove</a>
              </div>
          </li>
      )
  }
}

export default TodoListItem;
