import React, { Component } from 'react';
import Todo from './Todo';
import './TodoList.css';

class TodoList extends Component {
    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        const todos = this.props.tasks.map((value) => (
            <Todo key={value._id} task={value.task} id={value._id} removeTodo={this.removeTodo.bind(this, value._id)} />
        ));
        return (
            <div>
                <h1>THINGS TO DO</h1>
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;