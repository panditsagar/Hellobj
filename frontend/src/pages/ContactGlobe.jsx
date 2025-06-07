import React, { useRef, useEffect, useState } from 'react';
import Globe from 'react-globe.gl';
import { Link } from 'react-router-dom'; // Assuming you use react-router for <Link>

const GlobeWithBlueArcsAndOverlay = () => {
  const globeEl = useRef();
  const [arcsData, setArcsData] = useState([]);

  useEffect(() => {
    if (globeEl.current) {
      const controls = globeEl.current.controls();
      controls.enableZoom = false;    // disable zooming
      controls.enablePan = false;     // disable panning
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

    const blueColors = ['#3b82f6', '#2563eb', '#1e40af', '#60a5fa', '#3b82f6', '#1e3a8a', '#2563eb', '#60a5fa', '#3b82f6', '#1e3a8a'];

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
      {/* Globe fills the full container */}
      <div className="absolute inset-0" style={{ cursor: 'pointer' }}>
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

      {/* Overlay Section on top of Globe */}
      <section className="relative z-10 pt-64 px-6 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold italic text-[#582BF3] mb-6 leading-tight relative">
          Empowering Your Vision with Smart Digital Solutions
        </h1>
        <p className="text-2xl text-gray-300 mb-10 max-w-2xl mx-auto relative">
          Innovative technology, stunning design, and strategic insights — all tailored to fuel your business growth.
        </p>
        <div className="flex justify-center gap-4 flex-wrap relative">
          <Link
            to="/contact"
            className="bg-[#582BF3] text-white px-8 py-3 rounded-full font-medium"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GlobeWithBlueArcsAndOverlay;
