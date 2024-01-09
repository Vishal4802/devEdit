import React from 'react';

const Colors = ({ saturation, setSaturation, greyscale, setGreyscale, hue, setHue }) => {

  return (
        <div className="d-flex font-weight-bold text-primary" style={{ flexDirection: "column", gap: "8vh", width: "250px" }}>
          <div className="mb-4">
            <label className="form-label">
              Saturation:
              <input
                type="range"
                className="form-range"
                min="0"
                max="200"
                value={saturation}
                onChange={(e) => setSaturation(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Hue:
              <input
                type="range"
                className="form-range"
                min="0"
                max="360"
                value={hue}
                onChange={(e) => setHue(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Greyscale:
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                value={greyscale}
                onChange={(e) => setGreyscale(Number(e.target.value))}
              />
            </label>
          </div>
        </div>
  );
};

export default Colors;
