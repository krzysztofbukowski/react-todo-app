import * as React from 'react';
import './TodoList.css';

interface IDummyTodoListItemProps {
  label: string
}

class DummyTodoListItem extends React.Component<IDummyTodoListItemProps> {
  public render() {
    return (
      <li className="todo-list__item">
        <span><em>{this.props.label}</em></span>
      </li>
    );
  }
}

export default DummyTodoListItem;
