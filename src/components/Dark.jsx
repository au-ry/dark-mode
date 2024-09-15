import React, { useEffect, useState } from 'react'

function Dark() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {

    const element = document.getElementById('root');
    if (isDarkMode) {
      element.classList.add('dark-mode');
      element.classList.remove('light-mode');
    } else {
      element.classList.add('light-mode');
      element.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const changeColor = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked={isDarkMode}
        onChange={changeColor} />
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
    </div>
  )
}

export default Dark