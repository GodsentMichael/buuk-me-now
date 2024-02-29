import React from 'react';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-2 items-center">
      <div 
        className={`rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 cursor-pointer ${currentPage === 1 ? 'opacity-50' : ''}`}
        onClick={handlePrevPage}
      >
        <img src="/assets/arrow-left.png" alt="Left Arrow" className="h-7 w-7" /> 
      </div>
    
      {Array.from({ length: 3 }, (_, i) => (
        <div 
          key={i} 
          className={`rounded-full h-8 w-8 flex items-center justify-center cursor-pointer ${
            i + 1 === currentPage ? 'bg-[#004741] text-green-400' : 'bg-[#FFFFFF] text-green-400'
          }`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1} 
        </div>
      ))}
      
      <div className="rounded-full h-8 w-8 flex items-center justify-center bg-[#FFFFFF] cursor-pointer">...</div>
      
      <div className="rounded-full h-8 w-8 flex items-center justify-center text-[#004741] bg-[#FFFFFF]  cursor-pointer">
       6
      </div>
      
      <div 
        className={`rounded-full h-8 w-8 flex items-center justify-center bg-gray-200 cursor-pointer ${currentPage === totalPages ? 'opacity-50' : ''}`}
        onClick={handleNextPage}
      >
        <img src="/assets/arrow.png" alt="Right Arrow" className="h-7 w-7" /> 
      </div>
    </div>
  );
};

export default Pagination;
