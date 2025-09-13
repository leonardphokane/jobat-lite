import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-white shadow-md rounded p-6 w-full md:w-64">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">🔍 Filter Jobs</h2>

      <div className="space-y-4">
        {/* Location Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
          <select className="w-full border border-gray-300 rounded p-2">
            <option value="">Select location</option>
            <option value="remote">Remote</option>
            <option value="onsite">On-site</option>
          </select>
        </div>

        {/* Role Type Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Role Type</label>
          <select className="w-full border border-gray-300 rounded p-2">
            <option value="">Select role</option>
            <option value="fulltime">Full-Time</option>
            <option value="parttime">Part-Time</option>
            <option value="contract">Contract</option>
          </select>
        </div>

        {/* Experience Level Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
          <select className="w-full border border-gray-300 rounded p-2">
            <option value="">Select level</option>
            <option value="junior">Junior</option>
            <option value="mid">Mid-Level</option>
            <option value="senior">Senior</option>
          </select>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
