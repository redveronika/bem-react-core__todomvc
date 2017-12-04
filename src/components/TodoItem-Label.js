import PropTypes from 'prop-types';
import { decl } from 'bem-react-core';

export default decl({
    block: 'TodoItem',
    elem: 'Label',

    tag: 'label',

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
