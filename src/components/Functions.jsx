import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Functions = ({onContentClear, onDelete, onClickComa}) => (
    <section className="functions">
        <Button type="button-long-text" text="clear" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
        <Button text="." clickHandler={onClickComa} />
    </section>
    
)

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
    onClickComa: PropTypes.func
}

export default Functions