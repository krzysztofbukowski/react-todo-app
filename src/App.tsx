import * as React from 'react';
import './App.css';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList, { ITodo } from './components/TodoList/TodoList';

interface IAppState {
   items: ITodo[];
}

class App extends React.Component<{}, IAppState> {
   constructor(props: {}) {
      super(props);

      this.state = {
         items: []
      };
   }

   public componentDidMount() {
      this.setState({
         items: JSON.parse(localStorage.getItem('todo-items') as string) as ITodo[]
      });
   }

   public render() {
      return (
         <div className="app">
            <TodoList
               items={this.state.items}
               removeTodo={this.removeTodoItem}
            />
            <TodoInput
               defaultText="Enter todo"
               onValueChange={this.addTodoItem}
            />
         </div>
      );
   }

   private addTodoItem = (text: string) => {
      this.setState((prevState: IAppState) => {
         const todoItem = {
            id: Date.now(),
            label: text
         };

         prevState.items.push(todoItem);

         localStorage.setItem('todo-items', JSON.stringify(prevState.items));

         return prevState;
      });
   };

   private removeTodoItem = (todoId: number) => {
      this.setState((prevState: IAppState) => {
         const newState = {
            items: prevState.items.filter(
               (todoItem) => todoItem.id !== todoId
            )
         };

         localStorage.setItem('todo-items', JSON.stringify(newState.items));

         return newState;
      });
   };
}

export default App;
