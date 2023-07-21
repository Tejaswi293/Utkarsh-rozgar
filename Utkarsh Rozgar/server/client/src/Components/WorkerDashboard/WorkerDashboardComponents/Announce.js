import React, { useState, useEffect } from 'react';
import './announce.css';

function StickyBox() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = document.getElementById('sticky-container');
    const content = document.getElementById('sticky-content');

    const scrollHeight = content.scrollHeight - container.clientHeight;

    const interval = setInterval(() => {
      setScrollPosition((prevScrollPosition) =>
        prevScrollPosition >= scrollHeight ? 0 : prevScrollPosition + 1
      );
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="sticky-container" id="sticky-container">
      <div
        className="sticky-box"
        id="sticky-content"
        style={{ top: `-${scrollPosition}px` }}
      >
        <h2 >Announcements</h2>
        <p> <strong>Worker Scheme Updates Under DAY-NULM</strong></p>
        <p>1. <strong>Pradhan Mantri Shram Yogi Maandhan (PM-SYM)</strong>: Enroll in the PM-SYM scheme to secure your future. This pension scheme is designed specifically for unorganized workers, including daily wage laborers and vendors, providing them with a regular pension after the age of 60. </p>
        <p>2. <strong>Atmanirbhar Bharat Rozgar Yojana</strong>: Benefit from the Atmanirbhar Bharat Rozgar Yojana, which aims to incentivize job creation and promote formal employment. Under this scheme, both employers and employees receive financial support through provident fund contributions and wage subsidies..</p>
        <p>3. <strong>  Pradhan Mantri Mudra Yojana (PMMY) </strong> : Fulfill your entrepreneurial dreams with PMMY, a scheme that provides easy access to credit for micro and small businesses. Daily wage workers and vendors can avail of loans up to specific limits under different categories (Shishu, Kishor, and Tarun) to start or expand their business. </p>
        <p>4. <strong> Stand-Up India Scheme</strong> : As a daily wage worker or vendor, you can avail of the Stand-Up India Scheme, which promotes entrepreneurship among women and individuals from SC/ST communities. The scheme offers financial assistance for setting up greenfield enterprises in manufacturing, services, or the trading sector.  </p>
        

      </div>
    </div>
  );
}

export default StickyBox;

// import React, { useState } from 'react';

// const DropdownMenu = () => {
//   const [selectedOption, setSelectedOption] = useState('');

//   const handleSelect = (event) => {
//     setSelectedOption(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="dropdown">Select an option:</label>
//       <select id="dropdown" value={selectedOption} onChange={handleSelect}>
//         <option value="">Select</option>
//         <option value="option1">Option 1</option>
//         <option value="option2">Option 2</option>
//         <option value="option3">Option 3</option>
//       </select>
//       {selectedOption && (
//         <p>Selected option: {selectedOption}</p>
//       )}
//     </div>
//   );
// };

// export default DropdownMenu;
