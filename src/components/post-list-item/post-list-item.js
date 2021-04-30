import React from 'react';
import PropTypes from "prop-types";

import './post-list-item.css';

const PostListItem = ({label, onDelete, onToggleImportant, onToggleLiked, important, like}) => {

    let classNames = 'app-list-item d-flex justify-content-between';

    if(important) {
        classNames += ' important';
    }

    if(like) {
        classNames += ' like';
    }

    return (
        <div className={classNames}>
            <span 
                className="app-list-item-label"
                onClick={onToggleLiked}
            >
                {label}
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button 
                    className="btn-star btn-sm"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-star"></i>
                </button>
                <button 
                    className="btn-trash btn-sm"
                    onClick={onDelete}
                >
                    <i className="fa fa-trash-o"></i>
                </button>
                <i className="fa fa-heart"></i>
            </div>
        </div>
    )
};

PostListItem.propTypes = {
    label: PropTypes.string.isRequired,
    important: PropTypes.string.isRequired,
};

export default PostListItem;