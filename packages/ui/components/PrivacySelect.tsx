// components/PrivacyStatusSelect.js

import React from "react";

export const PrivacyStatusSelect: React.FC<{ selectedPrivacyStatus: string, onPrivacyStatusChange: (privacy: string) => void }> = ({ selectedPrivacyStatus, onPrivacyStatusChange }) => {
    const privacyStatusOptions = [
      { value: 'private', label: 'Private' },
      { value: 'public', label: 'Public' },
      // Add more privacy status options as needed
    ];
  
    return (
      <div className="mt-4">
        <label htmlFor="privacyStatus" className="block font-medium mb-1">
          Privacy Status
        </label>
        <div className="mt-1">
          <select
            id="privacyStatus"
            name="privacyStatus"
            className="py-2 bg-transparent  focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 rounded-md"
            value={selectedPrivacyStatus}
            onChange={(e) => onPrivacyStatusChange(e.target.value)}
          >
            {privacyStatusOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  export default PrivacyStatusSelect;
  