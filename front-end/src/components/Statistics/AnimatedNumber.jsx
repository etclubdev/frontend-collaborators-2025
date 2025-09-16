import { useState, useEffect } from "react";

function AnimatedNumber({ achievement_id, value, duration }) {
    const [displayedValue, setDisplayedValue] = useState(0);

    useEffect(() => {
        const duration = value <= 20 ? 100000 : 3000;

        let start = 0;
        const end = value;
        const increment = Math.ceil(end / (duration / 100));
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setDisplayedValue(end);
                clearInterval(timer);
            } else {
                setDisplayedValue(start);
            }
        }, 100);
        return () => clearInterval(timer);
    }, [value]);

    switch (achievement_id) {
        case "time":
            return (
                <div className="animated-number">{displayedValue} năm</div>
            );
        case "reach":
            return (
                <div className="animated-number">{displayedValue}K+</div>
            )
        default:
            return (
                <div className="animated-number">{displayedValue}+</div>
            )

    }
}

export default AnimatedNumber;