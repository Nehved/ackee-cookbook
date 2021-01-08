import React from 'react';
import { string } from 'prop-types';

const BackArrow = ({ color }) => (
  <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
    <g id="Occupancy-&amp;-Lighting" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
      <g id="Sidepanel-Copy-15" transform="translate(-12.000000, -12.000000)">
        <g id="Close-icon">
          <g id="arrow_back" transform="translate(12.000000, 12.000000)">
            <polygon id="Path" points="0 0 24 0 24 24 0 24" />
            <polygon id="Path" fill={color} fillRule="nonzero" points="20 11 7.83 11 13.42 5.41 12 4 4 12 12 20 13.41 18.59 7.83 13 20 13" />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

BackArrow.propTypes = {
  color: string,
};

BackArrow.defaultProps = {
  color: 'white',
};

export default BackArrow;
