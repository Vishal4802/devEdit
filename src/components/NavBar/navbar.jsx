import React from 'react'

const Navbar = ({isBasic, setIsBasic, isColors, setIsColors, isEffects, setIsEffects, isFilters, setIsFilters}) => {

    return(
      <nav className='mb-3 mt-3'>
        <ul className="d-flex list-unstyled text-uppercase" style={{justifyContent: "space-around"}}>
          <li
            className={`text-decoration-none btn ${isBasic ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => {setIsBasic(isBasic? isBasic : !isBasic), setIsColors(false), setIsEffects(false), setIsFilters(false)}}
          >
            Basic
          </li>
          <li
            className={`text-decoration-none btn ${isColors ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => {setIsBasic(false), setIsColors(isColors? isColors: !isColors), setIsEffects(false), setIsFilters(false)}}
          >
            Colors
          </li>
          <li
            className={`text-decoration-none btn ${isEffects ? 'btn-primary' : 'btn-outline-primary'}`}
            onClick={() => {setIsBasic(false), setIsColors(false), setIsEffects(isEffects? isEffects: !isEffects), setIsFilters(false)}}
          >
            Effects
          </li>
          <li
            className={`text-decoration-none btn ${isFilters ? 'btn-success' : 'btn-outline-success'}`}
            onClick={() => {setIsBasic(false), setIsColors(false), setIsEffects(false), setIsFilters(isFilters? isFilters: !isFilters)}}
          >
            Filters
          </li>
        </ul>
      </nav>
    ) 
};

export default Navbar
