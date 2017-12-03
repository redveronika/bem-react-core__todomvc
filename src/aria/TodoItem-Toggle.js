import PropTypes from 'prop-types';
import { decl } from 'bem-react-core';

export default decl({
    block: 'TodoItem',
    elem: 'Toggle',

    attrs() {
        return {
            ...this.__base(...arguments),
            'aria-labelledby': this.context.todoItemId
        }
    }
}, {
    contextTypes: {
        todoItemId: PropTypes.string,
    },
});
