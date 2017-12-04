import PropTypes from 'prop-types';
import { decl } from 'bem-react-core';

export default decl({
    block: 'TodoItem',
    elem: 'Destroy',

    tag: 'button',

    attrs({ onClick }) {
        return {
            onClick
        }
    }
}, {
    propTypes: {
        onClick: PropTypes.func,
    },
});
