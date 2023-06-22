import React from "react";
import PropTypes from "prop-types";

const ContactInfo = ({ data }) => {
    return (
        <div className={data.classOption}>
            <h6 className="title">{data.title}</h6>
            <p dangerouslySetInnerHTML={{ __html: data.info }}></p>
        </div>
    );
};

ContactInfo.propTypes = {
    data: PropTypes.object,
};

export default ContactInfo;
