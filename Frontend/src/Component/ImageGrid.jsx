import React from "react";

export default function ImageGrid({ images, selected, toggleSelect }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div
          key={`${img.id}-${index}`}
          className="relative group cursor-pointer"
        >
          <img
            src={img.url}
            alt={img.alt || ""}
            className="rounded-lg shadow hover:opacity-80 transition"
            onClick={() => toggleSelect(img.id)}
          />
          <input
            type="checkbox"
            checked={selected.has(img.id)}
            onChange={() => toggleSelect(img.id)}
            className="absolute top-2 left-2 w-5 h-5 accent-blue-600"
          />
        </div>
      ))}
    </div>
  );
}
