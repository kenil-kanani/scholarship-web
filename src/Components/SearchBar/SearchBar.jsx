import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search Scholarships..."
        className="border rounded-l p-2"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button className="bg-blue-500 text-white p-2 rounded-r" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
