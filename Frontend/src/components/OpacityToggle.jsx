import React, { useState } from 'react';

const OpacityToggle = () => {
  const [sectionOpacity, setSectionOpacity] = useState(1); // Initial opacity

  const handleClick = () => {
    setSectionOpacity(opacity => (opacity === 1 ? 0.1 : 1));
  };

  return (
    <div>
      <section id="root" style={{ opacity: sectionOpacity }}>
        This is the content in the section.
      </section>
      <button id="changeOpacityButton" onClick={handleClick}>
        Change Opacity
      </button>
    </div>
  );
};

export default OpacityToggle;
