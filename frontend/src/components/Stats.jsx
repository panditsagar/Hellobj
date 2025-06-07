import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Counter = ({ end, inView }) => {
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

    return <div className="text-5xl font-extrabold text-[#582BF3]">{count}+</div>;
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
            className="relative py-18 px-6 bg-black text-white overflow-hidden"
        >
            {/* Crossed Diagonal Effects */}
            <div
                className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#582BF3] blur-3xl transform -rotate-45 animate-pulse"
                style={{ opacity: 0.03 }}
            />
            <div
                className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-[#582BF3] blur-3xl transform rotate-45 animate-pulse"
                style={{ opacity: 0.03 }}
            />
            <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {statsData.map((item, index) => (
                    <div key={index}>
                        <Counter end={item.value} inView={inView} />
                        <div className="text-gray-300 mt-2 text-sm md:text-lg font-medium">
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Stats;
