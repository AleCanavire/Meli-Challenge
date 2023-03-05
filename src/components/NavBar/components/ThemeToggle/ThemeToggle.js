import React, { useEffect, useState } from 'react';
import { ReactComponent as SunIcon } from '../../../../assets/img/sun.svg';
import { ReactComponent as MoonIcon } from '../../../../assets/img/moon.svg';

function ThemeToggle() {

  const useDark = window.matchMedia("(prefers-color-scheme: dark)");

  function toggleDarkMode(state) {
    document.documentElement.classList.toggle("dark-mode", state);
  }
  toggleDarkMode(useDark.matches);

  useDark.addEventListener("change", (evt) => {
    toggleDarkMode(evt.matches);
    setIsEnabled(evt.matches);
  });

  const [isEnabled, setIsEnabled] = useState(false);
  function toggleState() {
    setIsEnabled(!isEnabled);
  };

  useEffect(()=>{
    toggleDarkMode(isEnabled)
  },[toggleState])

  return (
    <label className="toggle-wrapper" htmlFor="toggle">
      <div className={`toggle ${isEnabled ? "enabled" : "disabled"}`}>
        <div className="icons">
          <SunIcon/>
          <MoonIcon/>
        </div>
        <input
          id="toggle"
          name="toggle"
          type="checkbox"
          checked={isEnabled}
          onChange={toggleState}
        />
      </div>
    </label>
  )
}

export default ThemeToggle