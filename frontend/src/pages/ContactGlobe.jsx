import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { Link } from 'react-router-dom';

const GlobeWithBlueArcsAndOverlay = () => {
  const globeEl = useRef();
  const [arcsData, setArcsData] = useState([]);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.enableZoom = false;
      controls.enablePan = false;
      controls.autoRotate = true;
      controls.autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({ lat: 10, lng: 20, altitude: 2 }, 1500);
    }

    const cities = [
      { name: 'New York', lat: 40.7128, lng: -74.006 },
      { name: 'London', lat: 51.5074, lng: -0.1278 },
      { name: 'Tokyo', lat: 35.6762, lng: 139.6503 },
      { name: 'Sydney', lat: -33.8688, lng: 151.2093 },
      { name: 'Mumbai', lat: 19.076, lng: 72.8777 },
      { name: 'Rio de Janeiro', lat: -22.9068, lng: -43.1729 },
    ];

    const blueColors = ['#3b82f6', '#2563eb', '#1e40af', '#60a5fa', '#3b82f6', '#1e3a8a'];

    const arcs = [];
    cities.forEach((from, i) => {
      cities.forEach((to, j) => {
        if (i !== j) {
          arcs.push({
            startLat: from.lat,
            startLng: from.lng,
            endLat: to.lat,
            endLng: to.lng,
            color: blueColors[i % blueColors.length],
            dashLength: 0.4,
            dashGap: 0.6,
            dashAnimateTime: 1200,
          });
        }
      });
    });

    setArcsData(arcs);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Globe Canvas */}
      <div className="absolute inset-0">
        <Globe
          ref={globeEl}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
          backgroundColor="#000000"
          arcsData={arcsData}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor="color"
          arcDashLength="dashLength"
          arcDashGap="dashGap"
          arcDashAnimateTime="dashAnimateTime"
          arcStroke={1.5}
          arcsTransitionDuration={0}
          showAtmosphere={true}
          atmosphereColor="rgba(59, 130, 246, 0.15)"
          atmosphereAltitude={0.25}
        />
      </div>

      {/* Responsive Overlay Content */}
      <section className="relative z-10 px-4 sm:px-6 md:px-8 pt-32 sm:pt-48 md:pt-56 lg:pt-64 text-center max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-[#582BF3] mb-6 leading-tight">
          Empowering Your Vision with Smart Digital Solutions
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Innovative technology, stunning design, and strategic insights — all tailored to fuel your business growth.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to="/contact"
            className="bg-[#582BF3] hover:bg-[#4620d4] transition duration-300 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-medium text-base sm:text-lg"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobeWithBlueArcsAndOverlay;