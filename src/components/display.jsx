import "./display.css";
import React from "react";

function Display(props) {

    const {handleData, handleDisplay} = props;

    return(
        <div>
            <h2>EMPLOYEE FEEDBACK DATA</h2>
            <div className="dispaly-container">
                {
                    handleData.map((info, index) => {
                       return(
                        <div key={index} className="display">
                            Name : {info.name} | Department : {info.dept} | Rating : {info.rate}
                        </div>
                       )
                    })
                }
            </div>
            <button type="submit" onClick={handleDisplay}>Go Back</button>
        </div>
    )
}

export default Display;