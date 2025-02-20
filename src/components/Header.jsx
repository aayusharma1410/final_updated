import React from 'react';
    import './Header.css';

    function Header() {
      return (
        <header className="header">
          <h1>E-Learning Platform</h1>
          <nav>
            <a href="/">Home</a>
            <a href="/courses">Courses</a>
            <a href="/about">About</a>
          </nav>
        </header>
      );
    }

    export default Header;
