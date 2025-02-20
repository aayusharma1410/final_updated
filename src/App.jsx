import React, { useState } from 'react';
    import Sidebar from './components/Sidebar';
    import Dashboard from './components/Dashboard';
    import CoursesPage from './pages/CoursesPage';
    import TestsPage from './pages/TestsPage';
    import AssignmentsPage from './pages/AssignmentsPage';
    import DiscussionPage from './pages/DiscussionPage';
    import CourseDetailsPage from './pages/CourseDetailsPage';
    import LoginPage from './pages/LoginPage';
    import AboutPage from './pages/AboutPage';
    import QueryPage from './pages/QueryPage';
    import TeacherQueryPage from './pages/TeacherQueryPage';
    import ChatbotQueryPage from './pages/ChatbotQueryPage';
    import HackathonsPage from './pages/HackathonsPage';
    import EventsPage from './pages/EventsPage'; // Import EventsPage
    import './App.css';
    import { BrowserRouter, Route, Routes } from 'react-router-dom';

    function App() {
      const [loggedIn, setLoggedIn] = useState(false);
      const [username, setUsername] = useState('');

      return (
        <div className="app-container">
          <Sidebar />
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<CoursesPage />} />
              <Route path="/courses/:courseId" element={<CourseDetailsPage />} />
              <Route path="/tests" element={<TestsPage />} />
              <Route path="/assignments" element={<AssignmentsPage />} />
              <Route path="/discussion" element={<DiscussionPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/query" element={<QueryPage />} />
              <Route path="/teacher-query" element={<TeacherQueryPage />} />
              <Route path="/chatbot-query" element={<ChatbotQueryPage />} />
              <Route path="/hackathons" element={<HackathonsPage />} />
              <Route path="/events" element={<EventsPage />} /> {/* Add EventsPage route */}
              <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setUsername={setUsername} />} />
            </Routes>
          </div>
        </div>
      );
    }

    export default App;
