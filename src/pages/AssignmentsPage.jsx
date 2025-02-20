import React from 'react';
    import AssignmentCard from '../components/AssignmentCard';
    import AssignmentGraph from '../components/AssignmentGraph';
    import './AssignmentsPage.css';

    const AssignmentsPage = () => {
      const upcomingAssignments = [
        { id: 1, title: 'Code Challenge', description: 'Solve the daily coding problem.', dueDate: '2024-07-10' },
        {
          id: 2,
          title: 'Read Documentation',
          description: 'Read the documentation for React Hooks.',
          dueDate: '2024-07-12',
        },
        {
          id: 3,
          title: 'Build a To-Do App',
          description: 'Create a React to-do application.',
          dueDate: '2024-07-15',
        },
      ];

      const completedAssignments = [
        {
          id: 4,
          title: 'Project Presentation',
          description: 'Prepare and present your project.',
          completionDate: '2024-07-01',
        },
      ];

      const assignmentData = [
        { week: 'Week 1', completed: 7 },
        { week: 'Week 2', completed: 5 },
        { week: 'Week 3', completed: 8 },
        { week: 'Week 4', completed: 6 },
      ];

      return (
        <div className="assignments-page">
          <h1>Assignments</h1>
          <AssignmentGraph data={assignmentData} />

          <h2>Upcoming Assignments</h2>
          <div className="assignments-grid">
            {upcomingAssignments.map(assignment => (
              <AssignmentCard key={assignment.id} assignment={assignment} type="upcoming" />
            ))}
          </div>

          <h2>Completed Assignments</h2>
          <div className="assignments-grid">
            {completedAssignments.map(assignment => (
              <AssignmentCard key={assignment.id} assignment={assignment} type="completed" />
            ))}
          </div>
        </div>
      );
    };

    export default AssignmentsPage;
