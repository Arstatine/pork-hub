import { Search } from 'lucide-react';

export default function SearchInput({
  setFocused,
  searchText,
  setSearchText,
  handleSearchSubmit,
}) {
  return (
    <div className='flex gap-3 py-3 px-4'>
      <Search className='shrink-0' onClick={() => setFocused(true)} />
      <input
        type='search'
        placeholder='Search recipes, photos and videos'
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onFocus={() => setFocused(true)}
        onKeyDown={(e) => {
          handleSearchSubmit(e);
          if (
            (e.key === 'Enter' || e.key === 'Go' || e.key === 'Search') &&
            searchText != ''
          ) {
            e.currentTarget.blur();
          }
        }}
        className='h-full w-full bg-secondary-hover outline-none'
      />
    </div>
  );
}
