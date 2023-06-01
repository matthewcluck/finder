import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { createMapWidget } from './leafmappop.js';

export default function Map() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const [popupContainer, setPopupContainer] = useState(null);

  useEffect(() => {
    if (mapRef.current === null) {
      const map = createMapWidget(containerRef.current);
      mapRef.current = map;
    }
  }, []);

  return (
    <div style={{ width: 1750, height: 500 }} ref={containerRef}>
      {popupContainer !== null && createPortal(
        <p>Hello from React!</p>,
        popupContainer
      )}
    </div>
  );
}