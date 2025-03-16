import { useEffect, useState } from "react";

export default function Grid() {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    // Generate 1600 tiles dynamically
    setTiles(Array.from({ length: 1600 }, (_, index) => index));
  }, []);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-black overflow-hidden perspective-[2000px]">
      <div className="grid-container relative">
        {tiles.map((tile, index) => (
          <div key={index} className="tile" />
        ))}
      </div>
    </div>
  );
}