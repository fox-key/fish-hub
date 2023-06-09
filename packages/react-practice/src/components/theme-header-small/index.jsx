import React, {memo} from "react";
import PropTypes from "prop-types";

import {HeaderWrapper} from './style'

const ThemeHeaderSmall = memo(function (props) {
    const {title, more} = props;
    return (
        <div>
            <HeaderWrapper>
                <h3>{title}</h3>
                <a href="/abc">{more}</a>
            </HeaderWrapper>
        </div>
    )
})

ThemeHeaderSmall.propTypes = {
    title:PropTypes.string.isRequired,
    more:PropTypes.string
}

export default ThemeHeaderSmall
