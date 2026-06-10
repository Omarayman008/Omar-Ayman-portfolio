
import React from 'react';

interface GlitchNameProps {
  name: string;
}

const GlitchName: React.FC<GlitchNameProps> = ({ name }) => {
  return (
    <div className="glitch-wrapper">
      <h1 className="glitch" data-text={name}>
        {name}
      </h1>
      
    </div>
  );
};

export default GlitchName;
