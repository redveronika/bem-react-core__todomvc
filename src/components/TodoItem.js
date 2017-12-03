import React from 'react';
import { decl } from 'bem-react-core';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput';

export default decl({
    block: 'TodoItem',

    willInit() {
        this.state = {
            editing: false,
        };

        this.handleDoubleClick = this.handleDoubleClick.bind(this);
    },

    handleDoubleClick() {
        console.log('handleDoubleClick')
        this.setState({ editing: true });
    },

    handleSave(id, text) {
        if (text.length === 0) {
            this.props.deleteTodo(id);
        } else {
            this.props.editTodo(id, text);
        }
        this.setState({ editing: false });
    },

    tag: 'li',

    mods({ todo }) {
        return {
            completed: todo.completed,
            editing: this.state.editing,
        }
    },

    content({ todo, completeTodo, deleteTodo }) {
        console.log(this.state.editing)
        if (this.state.editing) {
            return (
                <TodoTextInput text={todo.text}
                               editing={this.state.editing}
                               onSave={(text) => this.handleSave(todo.id, text)} />
            );
        } else {
            return (
                <div className="view">
                    <input className="toggle"
                           type="checkbox"
                           checked={todo.completed}
                           onChange={() => completeTodo(todo.id)} />
                    <label onDoubleClick={this.handleDoubleClick}>
                        {todo.text}
                    </label>
                    <button className="destroy"
                            onClick={() => deleteTodo(todo.id)} />
                </div>
            );
        }
    }

}, {
    propTypes: {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
    },
});
