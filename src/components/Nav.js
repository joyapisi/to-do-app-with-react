import { useState, useRef } from 'react';
import useOnClickOutside from './useOnClickOutside';

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, dropdown, () => setDropdown(false));
  // useEffect(() => {
  //   const handler = (event) => {
  //     if (dropdown && ref.current && !ref.current.contains(event.target)) {
  //       setDropdown(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handler);
  //   document.removeEventListener("mousedown", handler);
  // }, [dropdown]);
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li ref={ref}>
          <button
            type="button"
            onClick={() => setDropdown((prev) => !prev)}
          >
            Services
            {' '}
            <span>&#8595;</span>
          </button>
          {dropdown && (
          <ul>
            <li>Design</li>
            <li>Development</li>
          </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
