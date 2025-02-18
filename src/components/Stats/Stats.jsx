import React, { useState, useEffect, useRef } from 'react'
import "../../App.css"

const Stats = () => {
    const [currentValues, setCurrentValues] = useState([0, 0, 0, 0]); // State for all spans
    const spanRefs = useRef([]); // Ref array for multiple spans

    const spansConfig = [
        { from: 0, to: 95 },
        { from: 0, to: 50 },
        { from: 0, to: 10 },
        { from: 0, to: 15 },
    ];

    // Array to keep track of visibility for each span
    const visibility = useRef([false, false, false, false]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting && !visibility.current[index]) {
                        visibility.current[index] = true; // Mark span as visible
                        animateSpan(index); // Start animation when visible
                    }
                });
            },
            { threshold: 0.1 } // Trigger when 10% of the span is visible
        );

        // Observe each span
        spanRefs.current.forEach((span) => {
            if (span) observer.observe(span);
        });

        return () => {
            spanRefs.current.forEach((span) => {
                if (span) observer.unobserve(span); // Cleanup on unmount
            });
        };
    }, []);

    const animateSpan = (index) => {
        const { from, to } = spansConfig[index];
        let currentVal = from;

        const step = () => {
            if (currentVal < to) {
                currentVal += 1; // Increment value
                setCurrentValues((prevValues) =>
                    prevValues.map((val, i) => (i === index ? currentVal : val)) // Update only the current span
                );
                requestAnimationFrame(step); // Continue animation
            }
        };

        requestAnimationFrame(step);
    };

    return (
        <div className="stats-area pt-75 rpt-45 rel z-1">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-2 col-lg-4 col-6">
                        <div className="counter-item counter-text-wrap">
                            {/* <i className="fal fa-check-circle" /> */}
                            <i className="fa-regular fa-circle-check"></i>
                            <span
                                ref={(el) => (spanRefs.current[0] = el)}
                                className="count-text percent"
                                data-from="0"
                                data-to="95"
                            >
                                {currentValues[0]}
                            </span>
                            <span className="counter-title">Project Success Rate</span>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-6">
                        <div className="counter-item counter-text-wrap">
                            {/* <i className="fal fa-check-circle" /> */}
                            <i className="fa-regular fa-circle-check"></i>
                            <span
                                ref={(el) => (spanRefs.current[1] = el)}
                                className="count-text plus"
                                data-from="0"
                                data-to="50"
                            >
                                {currentValues[1]}
                            </span>
                            <span className="counter-title">Use Cases</span>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-6">
                        <div className="counter-item counter-text-wrap">
                            {/* <i className="fal fa-check-circle" /> */}
                            <i className="fa-regular fa-circle-check"></i>
                            <span
                                ref={(el) => (spanRefs.current[2] = el)}
                                className="count-text plus"
                                data-from="0"
                                data-to="10"
                            >
                                {currentValues[2]}
                            </span>
                            <span className="counter-title">Industry Verticals</span>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-4 col-6">
                        <div className="counter-item counter-text-wrap">
                            {/* <i className="fal fa-check-circle" /> */}
                            <i className="fa-regular fa-circle-check"></i>
                            <span
                                ref={(el) => (spanRefs.current[3] = el)}
                                className="count-text percent"
                                data-from="0"
                                data-to="15"
                            >
                                {currentValues[3]}
                            </span>
                            <span className="counter-title">Faster Time-to-Market</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats
