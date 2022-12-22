
import React from 'react'
// import styles from './Header.module.css';


const Header = () => {
     
  return (
    <div>
        <a href="#main" class="skip-link">Skip to main content</a>
    <header>
      <div class="container">
        <h1>Style Stage</h1>
        <h2>A modern CSS showcase styled by community contributions</h2>
        <p>
          Maintained by <a href="https://twitter.com/5t3ph">Stephanie Eckles</a> of
          <a href="https://moderncss.dev">ModernCSS.dev</a>
        </p>
        <a href="https://github.com/5t3ph/stylestage" class="link-github"
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M32 12.408l-11.056-1.607-4.944-10.018-4.944 10.018-11.056 1.607 8 7.798-1.889 11.011 9.889-5.199 9.889 5.199-1.889-11.011 8-7.798z"
              ></path>
            </svg>
          </span>
          Star on Github</a
        >
      </div>
    </header>
    </div>
  );
};
  

export default Header