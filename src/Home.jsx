import { useState } from "react";
import './Home.css'

const Home = (props) => {
    console.log(props)
    const [selectedIndex, setSelectedIndex] = useState(0);
    // Ensure props.Button_Heart_Rate has a default value
    const buttonHeartRate = props.Button_Heart_Rate || "Default Button Label";
    const buttonTime = props.Button_Time || "Default Button Label";
    const buttons = [
        {
            btn: buttonHeartRate,
        },
        {
            btn: buttonTime,
        }
    ];
    return (
        <div>
            {buttons.map((item, index) => {
                return (
                    <button
                        key={index}
                        onClick={() => setSelectedIndex(index)}
                        className={`btn ${selectedIndex === index ? "active" : ""}`}
                    >
                        {item.btn}
                    </button>
                );
            })}
        </div>
    );
};

export default Home;