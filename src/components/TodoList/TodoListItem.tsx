import * as React from 'react';
import ClassNameBuilder from '../../utils/ClassNameBuilder';
import './TodoList.css';

interface ITodoListItemProps {
   label: string,
   onRemoveClick: (self: TodoListItem) => void
}

interface ITodoListItemState {
   isActive: boolean;
}

class TodoListItem extends React.Component<ITodoListItemProps, ITodoListItemState> {
   constructor(props: ITodoListItemProps) {
      super(props);

      this.state = {
         isActive: false
      };
   }

   public render() {

      const className = ClassNameBuilder.build({
         'todo-list__item': true,
         'todo-list__item--active': this.state.isActive
      });

      return (
         <li className={className}>
            <a className="todo-list__item-label"
               onClick={this.handleClick}>{this.props.label}</a>
            <div className="todo-list__item-actions">
               <a className="action action--danger"
                  onClick={this.handleRemoveClick}>Remove</a>
            </div>
         </li>
      );
   }

   private handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      this.setState((prevState => ({isActive: !prevState.isActive})));
   };

   private handleRemoveClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      this.props.onRemoveClick(this);
      // this.setState({isActive: false});
   };
}

export default TodoListItem;
