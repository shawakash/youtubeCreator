import React from 'react';


export const CategorySelect: React.FC<{ selectedCategory: string, onCategoryChange: (category: string) => void }> = ({ selectedCategory, onCategoryChange }) => {
    const categories = [
      { id: '22', name: 'People & Blogs' },
      { id: '10', name: 'Music' },
      { id: '23', name: 'Comedy' },
      { id: '24', name: 'Entertainment' },
      // Add more categories as needed
    ];
  
    return (
      <div className="mt-4">
        <label htmlFor="category" className="block font-medium mb-1">
          Category: 
        </label>
        <div className="mt-1">
          <select
            id="category"
            name="category"
            placeholder='Select a Video Category'
            className="py-2 bg-transparent  focus:ring-indigo-500 focus:border-indigo-500 block w-full border border-gray-300 rounded-md"
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
          >
            <option value="" className='text-gray-700'>Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  };
  
  