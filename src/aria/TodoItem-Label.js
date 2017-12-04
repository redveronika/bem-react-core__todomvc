import PropTypes from 'prop-types';
import { decl } from 'bem-react-core';

export default decl({
    block: 'TodoItem',
    elem: 'Label',

    attrs() {
        return {
            ...this.__base(...arguments),
            role: 'presentation',
            id: this.context.todoItemId
        }
    }
}, {
    contextTypes: {
        todoItemId: PropTypes.string,
    },
});
