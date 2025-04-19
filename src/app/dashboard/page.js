"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import TaskForm from './components/TaskForm';
import TaskList from '../components/TaskList';

export default function Dashboard() {
  // Mock data for now - will be replaced with API calls later
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Complete frontend design' },
    { id: 2, name: 'Set up database' },
    { id: 3, name: 'Implement authentication' }
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar isLoggedIn={true} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Tasks</h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          <TaskForm onAddTask={addTask} />
          <TaskList tasks={tasks} onDeleteTask={deleteTask} />
        </div>
      </div>
    </main>
  );
}