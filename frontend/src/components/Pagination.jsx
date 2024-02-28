import React from 'react';

const Pagination = () => {
  const totalPages = 6;
  const currentPage = 1; 

  return (
    <div className="flex gap-2 items-center">
    
      <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 cursor-pointer">
        <img src="/src/assets/arrow-left.png" alt="Left Arrow" className="h-7 w-7" /> 
      </div>
    
      {Array.from({ length: 3 }, (_, i) => (
        <div 
          key={i} 
          className={`rounded-full h-8 w-8 flex items-center justify-center cursor-pointer ${
            i + 1 === currentPage ? 'bg-[#004741] text-green-400' : 'bg-[#FFFFFF] text-green-400'
          }`}
        >
          {i + 1} 
        </div>
      ))}
      
      {/* Ellipsis */}
      <div className="rounded-full h-8 w-8 flex items-center justify-center bg-[#FFFFFF] cursor-pointer">...</div>
      
      {/* Display the last page */}
      <div className="rounded-full h-8 w-8 flex items-center justify-center bg-[#FFFFFF] cursor-pointer">
        {totalPages} 
      </div>
      
      <div className="rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 cursor-pointer">
        <img src="/src/assets/arrow.png" alt="Right Arrow" className="h-7 w-7" /> 
      </div>
    </div>
  );
};

export default Pagination;
