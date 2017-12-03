import { decl } from 'bem-react-core';

export default decl({
    block: 'TodoItem',

    getChildContext() {
        return {
            todoItemId: this.generateId()
        }
    }
}, {
    childContextTypesontextTypes: {
        todoItemId: PropTypes.string,
    },
});
