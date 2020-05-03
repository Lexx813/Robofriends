import React from 'react';

const SearchBox = ({ searchField, searchChange }) => {
   return (
      <div className='pa2'>
         <input
            onChange={searchChange}
            className='pa3 ba b--green bg-lightest-blue'
            type='text'
            placeholder='Search Robots'
         />
      </div>
   );
};

export default SearchBox;
