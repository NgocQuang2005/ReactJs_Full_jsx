import React from 'react'
import PropTypes from 'prop-types';

const Btnout = ({ stylebt, iconandstyle, conten }) => {
    return (
        <div>
            <button className={stylebt}>
                <span><i className={iconandstyle} ></i></span>
                <span>{conten}</span>
            </button>
        </div>
    )
}
Btnout.propTypes = {
    stylebt: PropTypes.string.isRequired,
    iconandstyle: PropTypes.string.isRequired, // cái này là ràng buộc kh dc để trống
    conten: PropTypes.string.isRequired,
    // conten: PropTypes.oneOf(['1', '2']), == cái này dùng để ràng buộc giá trị phải truyền vào số 1 hoặc 2 ở phía console ===
};

export default Btnout
