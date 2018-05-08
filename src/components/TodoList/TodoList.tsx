import * as React from 'react';
import { MouseEvent } from 'react';
import './TodoList.css';
import TodoListItem from './TodoListItem';

interface ITodoListProps {
    items: string[]
}

class TodoList extends React.Component<ITodoListProps> {
  public render() {
    return (
      <ul className="todo-list" onMouseEnter={this.onMouseOver}>
          {this.props.items.length === 0 &&
              (<li className="todo-list__item">
                  <span><em>No items to display</em></span>
              </li>)
          }
          {this.props.items.map((item, index) => {
              return (
                  <TodoListItem
                      key={`todo-list::item::${index}`}
                      label={item}
                  />
              )
          })}
      </ul>
    );
  }

  private onMouseOver = (e: MouseEvent<HTMLElement>) => {
      console.log(e.target);
      // e.stopPropagation()
  }
}

export default TodoList;
