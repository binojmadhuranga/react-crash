import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2>My Dashboard</h2>
        <ul>
          <li>Overview</li>
          <li>Analytics</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <h1>Welcome Back!</h1>
          <p>Here's a quick summary of your activity.</p>
        </header>

        <section className="dashboard-cards">
          <div className="card">
            <h3>Total Users</h3>
            <p>1,240</p>
          </div>
          <div className="card">
            <h3>Revenue</h3>
            <p>$23,456</p>
          </div>
          <div className="card">
            <h3>New Orders</h3>
            <p>312</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
