"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export default function FootprintAnimation({ mainContainerRef }) {
  const footprintContainerRef = useRef(null);

  useEffect(() => {
    // Ensure the main container ref is available
    if (!mainContainerRef.current) return;

    const mainContainer = mainContainerRef.current;
    const footprintContainer = footprintContainerRef.current;
    
    // Use a context for GSAP to scope animations and ScrollTriggers
    let ctx = gsap.context(() => {
      // --- Set the footprint container height to match the total scrollable height ---
      footprintContainer.style.height = `${mainContainer.offsetHeight}px`;

      // --- Define the SVG template for a single footprint ---
      const footprintTemplate = `
        <svg class="footprint" style="position: absolute; width: 50px; height: 50px; fill: #cccccc; transform-origin: 50% 50%;" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.978 489.978">
            <g><g><g>
                <path d="M184.231,239.9c43.9,23.3,64.5,75.4,49.8,123.3c-2.7,8.6-5.1,17.5-7,26.4c-7.8,40,2.7,90.2,46.7,99.1 c22.2,4.7,44.3-3.9,59.9-20.2c46.5-50.5,32.3-202.6,31.9-240.7c0-16.7-0.4-33.8-7-49.4c-14.8-35-56.4-49-93.3-58.7 c-60.6-22.1-98.8,5.8-111.6,26.4S131.531,212.5,184.231,239.9z"/>
                <ellipse cx="141.831" cy="44.3" rx="31.5" ry="44.3"/>
                <ellipse cx="214.631" cy="51.7" rx="18.7" ry="26.4"/>
                <ellipse cx="272.931" cy="68" rx="16.7" ry="23.3"/>
                <ellipse cx="326.131" cy="81.7" rx="14.8" ry="20.6"/>
                <ellipse transform="matrix(-0.2014 0.9795 -0.9795 -0.2014 546.9331 -227.4809)" cx="366.2" cy="109.218" rx="18.3" ry="13.2"/>
            </g></g></g>
        </svg>
      `;

      // --- Path now uses percentages for better responsiveness ---
      const path = [
          {x: window.innerWidth * 0.3, y: mainContainer.offsetHeight * 0.1},
          {x: window.innerWidth * 0.7, y: mainContainer.offsetHeight * 0.22},
          {x: window.innerWidth * 0.2, y: mainContainer.offsetHeight * 0.37},
          {x: window.innerWidth * 0.8, y: mainContainer.offsetHeight * 0.5},
          {x: window.innerWidth * 0.3, y: mainContainer.offsetHeight * 0.65},
          {x: window.innerWidth * 0.7, y: mainContainer.offsetHeight * 0.82},
          {x: window.innerWidth * 0.5, y: mainContainer.offsetHeight - 200},
      ];

      const footprintCount = 40;
      const footprints = [];
      
      const dummy = document.createElement('div');
      const pathAnimation = gsap.to(dummy, {
          motionPath: {
              path: path,
              autoRotate: true,
          },
          paused: true,
          ease: 'none'
      });

      // Create and position all footprints
      for (let i = 0; i < footprintCount; i++) {
          footprintContainer.innerHTML += footprintTemplate;
          const clone = footprintContainer.children[i];
          
          const progress = i / (footprintCount - 1);
          pathAnimation.progress(progress);

          const x = gsap.getProperty(dummy, "x");
          const y = gsap.getProperty(dummy, "y");
          const rotation = gsap.getProperty(dummy, "rotation");
          
          gsap.set(clone, {
              x: x, 
              y: y, 
              rotation: rotation + 90, // Rotate footprint to face forward
              scaleX: i % 2 === 0 ? 1 : -1, // Alternate left/right
              opacity: 0, 
          });
          
          footprints.push(clone);
      }
      
      // Animate the footprints to appear on scroll
      gsap.to(footprints, {
          opacity: 0.25, // A subtle opacity for the trail
          stagger: 0.1,
          scrollTrigger: {
              trigger: mainContainer,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.5,
          }
      });

    }, footprintContainer); // Scope the context to the container

    // Cleanup function to kill animations and ScrollTriggers on component unmount
    return () => ctx.revert();
  }, [mainContainerRef]); // Rerun effect if the ref changes

  return (
    <div 
      ref={footprintContainerRef} 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1,
        pointerEvents: 'none'
      }}
    />
  );
}
