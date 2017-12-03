import React from 'react';
import { declMod } from 'bem-react-core';
import TodoTextInput from './TodoTextInput';

export default declMod(function () {return this.state.editing}, {
    block: 'TodoItem',

    content({ todo }) {
        return (
            <TodoTextInput text={todo.text}
                           editing={this.state.editing}
                           onSave={(text) => this.handleSave(todo.id, text)} />
        );
    }
});
