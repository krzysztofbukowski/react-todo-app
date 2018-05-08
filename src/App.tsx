import * as React from 'react';
import { KeyboardEvent } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';

interface IAppState {
    items: string[];
}

class App extends React.Component<{}, IAppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            items: []
        }
    }

  public render() {
    return (
      <div className="app">
          <TodoList items={this.state.items}/>
          <input
              type="text"
              onKeyDown={this.handleKeyDown}
              placeholder="Enter todo"
          />
      </div>
    );
  }

  private handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
          console.log(e.nativeEvent.target && e.nativeEvent.target.classList);
          this.addItem("test");
      }
  }

  private addItem = (text: string) => {
      this.setState((prevState: IAppState) => {
         prevState.items.push(text);

         return prevState;
      });
  }
}

export default App;
