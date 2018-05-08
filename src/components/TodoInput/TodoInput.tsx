import * as React from 'react';
import './TodoInput.css';

interface ITodoInputProps {
   defaultText: string
   onValueChange: (value: string) => void
}

class TodoInput extends React.Component<ITodoInputProps> {
   public render() {
      return (
         <input
            className="todo-input"
            type="text"
            placeholder={this.props.defaultText}
            onKeyDown={this.handleKeyDown}
         />
      );
   }

   private handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === 13) {
         this.props.onValueChange(e.currentTarget.value);
         e.currentTarget.value = '';
      }
   };
}

export default TodoInput;
