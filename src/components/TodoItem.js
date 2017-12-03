import React from 'react';
import Bem, { decl } from 'bem-react-core';
import PropTypes from 'prop-types';
import Toggle from 'e:Toggle';
import Label from 'e:Label';
import Destroy from 'e:Destroy';

import "m:editing";

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
        return (
            <Bem elem="View">
                <Toggle checked={todo.completed}
                        onChange={() => completeTodo(todo.id)} />
                <Label onDoubleClick={this.handleDoubleClick}>
                    {todo.text}
                </Label>
                <Destroy onClick={() => deleteTodo(todo.id)} />
            </Bem>
        );
    }

}, {
    propTypes: {
        todo: PropTypes.object.isRequired,
        editTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        completeTodo: PropTypes.func.isRequired,
    },
});
