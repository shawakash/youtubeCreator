import React from 'react'

export const Upload: React.FC<{ handleClick: () => void }> = ({ handleClick }) => {
  return (
    <>
        <button
        onClick={handleClick}
            className="w-fit bg-blue-500 text-white py-2 px-4 rounded-2xl hover:bg-blue-600 hover:scale-105 active:scale-90 transition-all"
          >
              Upload To Youtube
          </button>
    </>
  );
}
