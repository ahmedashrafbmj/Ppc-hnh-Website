import React from "react";
import HomeData from "../../../data/home.json";
import IconBox from "../../../components/icon-box";

const Services = () => {
    return (
        <>
            <div>
                <div className="col-12 mt-10">
                    <div id="grid" className="grid row mb-n7">
                        {HomeData[2].iconBox &&
                            HomeData[2].iconBox.map((single, key) => {
                                return <IconBox key={key} data={single} />;
                            })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Services;
