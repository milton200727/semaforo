import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const lights = ["red", "yellow", "green"];

    return (
        <div className="traffic-light">
            {lights.map((light) => (
                <div
                    key={light}
                    className={`light ${light} ${color === light ? "active" : ""}`}
                    onClick={() => setColor(light)}
                />
            ))}
        </div>
    );
};

export default TrafficLight;