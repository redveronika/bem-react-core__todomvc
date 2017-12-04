import PropTypes from 'prop-types';
import { decl } from 'bem-react-core';

export default decl({
    block: 'TodoItem',

    getChildContext() {
        return {
            todoItemId: this.generateId()
        }
    }
}, {
    childContextTypes: {
        todoItemId: PropTypes.string,
    },
});
