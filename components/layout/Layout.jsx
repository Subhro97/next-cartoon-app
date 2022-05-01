import React, { useState } from 'react';
import styles from './Layout.scss';

const Layout = ({ children }) => {
  const [active, setActive] = useState({ value: false, idx: 0 });

  return (
    <>
      <header className="container">
        <div>Cartoon World</div>
        <nav>
          <ul>
            {['Naruto', 'Boruto', 'Bleach', 'One Piece', 'My Hero Academia'].map((item, idx) => (
              <li key={`nav-${idx}`}>
                <span
                  className={idx === active.idx ? 'active' : ''}
                  onClick={() =>
                    setActive((state) => ({
                      value: !state.value,
                      idx: idx,
                    }))
                  }
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer></footer>
      <style jsx>{styles}</style>
    </>
  );
};

export default Layout;
