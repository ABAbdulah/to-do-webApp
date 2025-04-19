"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../../components/Navbar';

export default function EditTask({ params }) {
  const router = useRouter();
  const { id } = params || {};
  const [task, setTask] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mock fetch task - will be replaced with API call later
    if (id) {
      // Simulate API delay
      setTimeout(() => {
        // Simulating a task fetch based on ID
        setTask(`Task ${id}`); // Default placeholder
        setIsLoading(false);
      }, 300);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      // Will implement actual task update later
      console.log('Updating task:', { id, name: task });
      router.push('/dashboard');
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-gray-50">
        <Navbar isLoggedIn={true} />
        <div className="max-w-4xl mx-auto px-4 py-8 flex justify-center items-center">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar isLoggedIn={true} />
      <div className="max-w-2xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Edit Task</h1>
        
        <div className="bg-white shadow rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="task" className="block text-sm font-medium text-gray-700">
                Task name
              </label>
              <input
                id="task"
                name="task"
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => router.push('/dashboard')}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Update Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}