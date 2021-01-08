import React from 'react';
import { string } from 'prop-types';

function Clocks({ color }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 20 20">
      <g fill={color}>
        <path d={`M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10
          0zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z`}
        />
        <path d="M10.5 5L9 5 9 11 14.2 14.2 15 12.9 10.5 10.2z" />
      </g>
    </svg>

  );
}

Clocks.propTypes = {
  color: string,
};

Clocks.defaultProps = {
  color: 'black',
};

export default Clocks;
