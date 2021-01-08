import React from 'react';
import { string } from 'prop-types';

const Star = ({ color }) => (
  <svg height="21px" version="1.1" viewBox="0 0 20 21" width="20px" xmlns="http://www.w3.org/2000/svg">
    <title />
    <desc />
    <defs />
    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
      <g fill={color} id="Core" transform="translate(-296.000000, -422.000000)">
        <g id="star" transform="translate(296.000000, 422.500000)">
          <path d="M10,15.273 L16.18,19 L14.545,11.971 L20,7.244 L12.809,6.627 L10,0 L7.191,6.627 L0,7.244 L5.455,11.971 L3.82,19 L10,15.273 Z" id="Shape" />
        </g>
      </g>
    </g>
  </svg>
);

Star.propTypes = {
  color: string,
};

Star.defaultProps = {
  color: 'pink',
};

export default Star;
