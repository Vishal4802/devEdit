import React from 'react'

const Basic = ({size, setSize, brightness, setBrightness, contrast, setContrast}) => {

  return (
    <div className="d-flex font-weight-bold text-primary" style={{flexDirection:"column", gap: "8vh", width: "250px"}}>
          <div className="mb-4">
            <label className="form-label">
              Size:
              <input
                type="range"
                className="form-range"
                min="50"
                max="200"
                value={size}
                onChange={(e) => setSize(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Contrast:
              <input
                type="range"
                className="form-range"
                min="0"
                max="200"
                value={contrast}
                onChange={(e) => setContrast(Number(e.target.value))}
              />
            </label>
          </div>

          <div className="mb-4">
            <label className="form-label">
              Brightness:
              <input
                type="range"
                className="form-range"
                min="0"
                max="200"
                value={brightness}
                onChange={(e) => setBrightness(Number(e.target.value))}
              />
            </label>
          </div>
        </div>
  )
}

export default Basic
