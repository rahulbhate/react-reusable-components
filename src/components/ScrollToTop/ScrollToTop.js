// Box Component
import React from 'react';
import useScrollPosition from '../hooks/useScrollPostion';

const boxStyles = {
  position: 'fixed',
  width: '100%',
  top: 0,
};

const handleScroll = () => {
  // Doesn't work in IE browser..
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
};
const ScrollToTop = () => {
  const scrollPos = useScrollPosition();
  const headerHeight = scrollPos;
  return (
    <div style={{ height: headerHeight, ...boxStyles }}>
      Height: {headerHeight} {scrollPos}
      {headerHeight >= 100 ? (
        <div
          style={{
            position: 'fixed',
            right: 50,
            bottom: 50,
            width: 35,
            height: 35,
            cursor: 'pointer',
            borderRadius: '5px',
            textAlign: 'center',
            paddingTop: '3px',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
          onClick={handleScroll}
        >
          <span style={{ color: 'white' }}>&#9650;</span>
        </div>
      ) : null}
    </div>
  );
};

export default ScrollToTop;
