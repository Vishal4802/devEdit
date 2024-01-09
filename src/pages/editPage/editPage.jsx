import React, { useState, useEffect } from 'react';
import Basic from '../../components/basic/basic';
import Navbar from '../../components/NavBar/navbar';
import Colors from '../../components/Colors/colors';
import Effects from '../../components/Effects/Effects';
import Filters from '../../components/filters/filters';

const EditPage = ({ imageUrl, handleCancel }) => {
  const [size, setSize] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [brightness, setBrightness] = useState(100);

  const [saturation, setSaturation] = useState(100);
  const [hue, setHue] = useState(0);
  const [greyscale, setGreyscale] = useState(0);

  const [blur, setBlur] = useState(0);
  const [opacity, setOpacity] = useState(100);
  const [invert, setInvert] = useState(0);

  const [sepia, setSepia] = useState(0)
  
  const [context, setContext] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [isBasic, setIsBasic] = useState(true)
  const [isColors, setIsColors] = useState(false)
  const [isEffects, setIsEffects] = useState(false)
  const [isFilters, setIsFilters] = useState(false)

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    setContext(ctx);
  }, []);

  useEffect(() => {
    if (!context) return;

    const image = new Image();
    image.onload = () => {
      context.clearRect(0, 0, context.canvas.width, context.canvas.height);
      context.filter = `contrast(${contrast}%) brightness(${brightness}%) saturate(${saturation}%) hue-rotate(${hue}deg) grayscale(${greyscale}%) blur(${blur}px) opacity(${opacity/100}) invert(${invert}%) sepia(${sepia}%)`;
      context.drawImage(
        image,
        position.x,
        position.y,
        (size / 100) * image.width,
        (size / 100) * image.height
      );
    };

    image.src = imageUrl;
  }, [context, imageUrl, size, contrast, brightness, position, hue, saturation, greyscale, blur, opacity, invert, sepia]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      setPosition({ x: position.x + dx, y: position.y + dy });
      setDragStart({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleDownload = () => {
    const canvas = document.getElementById('canvas');
    const url = canvas.toDataURL('image/jpeg');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'edited_image.jpeg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <>
      <Navbar
        isBasic={isBasic}
        setIsBasic={setIsBasic}
        isColors={isColors}
        setIsColors={setIsColors}
        isEffects={isEffects}
        setIsEffects={setIsEffects}
        isFilters={isFilters}
        setIsFilters={setIsFilters}
      />

      <div className="d-flex justify-content-center align-items-center" style={{gap: "10vw"}}>
        <div className="">
          <canvas
            id="canvas"
            className='bg-dark'
            width={550}
            height={550}
            style={{ border: '1px solid #ccc', cursor: isDragging ? 'grabbing' : 'grab' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
          />
        </div>
        {isBasic && 
          <Basic
            setSize={setSize}
            size={size}
            contrast={contrast}
            setBrightness={setBrightness}
            setContrast={setContrast}
            brightness={brightness}
          />
        }
        {isColors && 
          <Colors
            setSaturation={setSaturation}
            hue={hue}
            saturation={saturation}
            setHue={setHue}
            greyscale={greyscale}
            setGreyscale={setGreyscale}
          />
        }
        {isEffects && 
          <Effects
            blur={blur}
            setBlur={setBlur}
            opacity={opacity}
            setOpacity={setOpacity}
            invert={invert}
            setInvert={setInvert}
          />
        }
        {isFilters && 
          <Filters
            sepia={sepia}
            setSepia={setSepia}
          />
        }
      </div>

      <div className="row mt-3">
        <div className="col-md-8">
          <div className="btn-group">
            <button onClick={handleDownload} className='btn btn-primary me-2'>Download</button>
            <button onClick={handleCancel} className='btn btn-danger'>Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditPage;
