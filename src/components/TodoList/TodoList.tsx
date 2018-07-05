import * as React from 'react';
import DummyTodoListItem from './DummyTodoListItem';
import './TodoList.css';
import TodoListItem from './TodoListItem';

export interface ITodo {
  label: string,
  id: number
};

interface ITodoListProps {
  items: ITodo[],
  removeTodo: (todoId: number) => void
}

class TodoList extends React.Component<ITodoListProps> {

  public render() {
    return (
      <ul className="todo-list">
        {this.props.items.length === 0 &&
          (<DummyTodoListItem label="Nothing to show" />)
        }
        {this.props.items.map((item) => {
          return (
            <TodoListItem
              key={`todo-list::item::${item.id}`}
              label={item.label}
              onRemoveClick={() => { this.props.removeTodo(item.id) }}
            />
          );
        })}
      </ul>
    );
  }
}

export default TodoList;
