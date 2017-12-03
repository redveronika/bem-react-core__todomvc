import React from 'react';
import PropTypes from 'prop-types';
import { decl } from 'bem-react-core';

export default decl({
    block: 'TodoItem',
    elem: 'Toggle',

    tag: 'input',

    attrs({ checked, onChange }) {
        return {
            type: 'checkbox',
            checked,
            onChange
        }
    }
}, {
    propTypes: {
        checked: PropTypes.bool,
        onChange: PropTypes.func,
    },
});
