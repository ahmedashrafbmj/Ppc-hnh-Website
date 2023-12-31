import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { flatDeep, slugify, containsObject } from "../../../utils";

const SidebarCategories = ({ data }) => {
    const cats = data.map((item) => {
        return item.categories;
    });
    let singleCatArray = flatDeep(cats);
    let categories = [];
    singleCatArray.forEach((cat) => {
        const obj = {
            title: cat.trim(),
            slug: slugify(cat),
            count: 1,
        };
        const objIndex = containsObject(obj, categories);
        if (objIndex !== -1) {
            const prevCount = categories[objIndex].count;
            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify(cat),
                count: prevCount + 1,
            };
        } else {
            categories.push(obj);
        }
    });
    return (
        <div className="widget-list">
            <ul className="list-group list-group-flush">
            <li  className="list-group-item">
                          
                          Websites <span> - 300</span>
                  </li>
     
            <li  className="list-group-item">
                          
                          Admin Panels <span> - 100</span>
                  </li>
            <li  className="list-group-item">
                          
                          Applications  <span> - 50</span>
                  </li>
                {/* {categories.map((cat, i) => {
                    return (
                        <li key={i} className="list-group-item">
                          
                                {cat.title} <span>{cat.count}</span>
                        </li>
                    );
                })} */}
            </ul>
        </div>
    );
};

SidebarCategories.propTypes = {
    data: PropTypes.array,
};

export default SidebarCategories;
