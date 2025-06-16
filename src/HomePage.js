import React from 'react';

function HomePage({ darkMode }) {
  return (
    <div style={{ paddingTop: 120, textAlign: 'center', color: darkMode ? '#fff' : '#232323' }}>
      <h1>Welcome to My</h1>
      <p>Click Journey or Resume to explore.</p>
    </div>
  );
}

export default HomePage;