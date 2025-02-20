import React from 'react';
    import './Sidebar.css';
    import '@fortawesome/fontawesome-free/css/all.css';

    function Sidebar() {
      return (
        <div className="sidebar">
          <div className="logo">Vidhya Bandhu</div>
          <nav>
            <ul>
              <li>
                <a href="/">
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="/courses">
                  <i className="fas fa-book"></i>
                  <span>Courses</span>
                </a>
              </li>
              <li>
                <a href="/tests">
                  <i className="fas fa-file-alt"></i>
                  <span>Tests</span>
                </a>
              </li>
              <li>
                <a href="/assignments">
                  <i className="fas fa-tasks"></i>
                  <span>Assignments</span>
                </a>
              </li>
              <li>
                <a href="/discussion">
                  <i className="fas fa-users"></i>
                  <span>Discussion</span>
                </a>
              </li>
              <li>
                <a href="/events">
                  <i className="fas fa-calendar-alt"></i>
                  <span>Events</span>
                </a>
              </li>
              <li>
                <a href="/hackathons">
                  <i className="fas fa-code"></i>
                  <span>Hackathons</span>
                </a>
              </li>
              <li>
                <a href="/query">
                  <i className="fas fa-question-circle"></i>
                  <span>Query</span>
                </a>
              </li>
              <li>
                <a href="/about">
                  <i className="fas fa-info-circle"></i>
                  <span>About</span>
                </a>
              </li>
              <li>
                <a href="/login">
                  <i className="fas fa-sign-in-alt"></i>
                  <span>Login</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
    }

    export default Sidebar;
