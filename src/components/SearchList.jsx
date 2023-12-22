import { Search, X } from 'lucide-react';

function SearchList({ list, index, handleRemoveSearches, handleClickSearch }) {
  return (
    <div
      title={list}
      className='py-3 px-4 cursor-pointer hover:bg-tertiary flex justify-between items-center'
    >
      <div
        className='flex gap-3 items-center break-words h-full w-full overflow-x-hidden'
        onClick={() => handleClickSearch(list)}
      >
        <Search size={16} className='shrink-0' />
        <p className='line-clamp-1'>{list}</p>
      </div>
      <X
        size={16}
        className='hover:text-red-400 shrink-0'
        onClick={() => handleRemoveSearches(index)}
      />
    </div>
  );
}

export default SearchList;
