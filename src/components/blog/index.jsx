import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { slugify } from "../../utils";

const BlogGrid = ({ data, classOption }) => {
    return (
        <div className="blog-card">
            <div className={`thumb bg-light text-center ${classOption}`}>
                    <img
                        src={`${process.env.PUBLIC_URL}/${data.media.gridImage}`}
                        alt="img"
                    />
            </div>
            <div className="blog-content">
            
                    <span className="blog-meta author">{data.author}</span>
                <span className="separator">-</span>
                    <span className="blog-meta date">{data.date}</span>
                <h3 className="title">
                        {data.title}
                </h3>
            </div>
        </div>
    );
};

BlogGrid.propTypes = {
    data: PropTypes.object,
    classOption: PropTypes.string,
};

BlogGrid.defaultProps = {
    classOption: "thumb",
};

export default BlogGrid;
