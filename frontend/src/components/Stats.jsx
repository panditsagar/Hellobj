import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, inView, textClass = "text-white" }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;

        let start = 0;
        const duration = 1500;
        const step = end / (duration / 20);

        const interval = setInterval(() => {
            start += step;
            if (start >= end) {
                start = end;
                clearInterval(interval);
            }
            setCount(Math.floor(start));
        }, 20);

        return () => clearInterval(interval);
    }, [inView, end]);

    return <div className={`text-5xl font-bold ${textClass}`}>{count}+</div>;
};

const Stats = () => {
    const { ref, inView } = useInView({ triggerOnce: true });

    const statsData = [
        { label: 'Employees Team', value: 50 },
        { label: 'SAP Projects Implemented', value: 20 },
        { label: 'Years Experience', value: 20 },
        { label: 'Countries of Presence', value: 3 },
    ];

    return (
        <section
            ref={ref}
            className="py-16 px-6 bg-gradient-to-br from-blue-200 via-white to-blue-300

"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {statsData.map((item, index) => (
                    <div key={index}>
                        {/* Pass textClass to Counter to control text color */}
                        <Counter end={item.value} inView={inView} textClass="text-blue-900" />
                        <div className="text-blue-900 mt-2 text-sm md:text-base font-medium">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
