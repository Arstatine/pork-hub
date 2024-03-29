import { Menu, X } from 'lucide-react';
import logo from '../assets/porkhub-logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { menu } from '../utils';
import SearchList from './SearchList';
import SearchInput from './SearchInput';

function Navbar({ searchText, setSearchText }) {
  const [focused, setFocused] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [searches, setSearches] = useState([]);
  const [path, setPath] = useState(window.location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    setPath(window.location.pathname);
  }, [window.location.pathname]);

  // checked if local storage has value and assign it to the search list
  useEffect(() => {
    if (window.localStorage.getItem('searches')) {
      const data =
        window.localStorage.getItem('searches').split(',') == ''
          ? []
          : window.localStorage.getItem('searches').split(',');
      if (data) {
        setSearches(data);
        window.localStorage.setItem('searches', data.join(','));
      }
    }
  }, []);

  // remove search list based on index
  const handleRemoveSearches = (index) => {
    const newData = searches.filter((item, i) => {
      return i != index;
    });

    setSearches(newData);
    window.localStorage.setItem('searches', newData.join(','));
  };

  // add new search history to search list
  const handleSearchSubmit = (e) => {
    if (
      (e.key === 'Enter' || e.key === 'Go' || e.key === 'Search') &&
      searchText != ''
    ) {
      setSearches((prev) => [searchText, ...prev]);
      setFocused(false);
      let newData = searches == '' ? searchText : searchText + ',' + searches;
      window.localStorage.setItem('searches', `${newData}`);
      navigate('/');
    }
  };

  const handleClickSearch = (text) => {
    setSearches((prev) => [text, ...prev]);
    setFocused(false);
    setSearchText(text);
    let newData = searches == '' ? searchText : searchText + ',' + searches;
    window.localStorage.setItem('searches', `${newData}`);
    navigate('/');
  };

  return (
    <div className='flex justify-center items-center bg-secondary flex-col'>
      {/* Top Navbar */}
      <div className='container flex justify-between items-center p-4 gap-4 lg:gap-0'>
        <div className='flex justify-center items-center gap-3'>
          <div
            className={`p-3 hover:bg-secondary-hover cursor-pointer rounded-full ${
              focused ? 'hidden' : 'block lg:hidden '
            }`}
            onClick={() => setOpenMenu(true)}
          >
            <Menu />
          </div>
          <Link
            to='/'
            className={`transition-all ${focused ? 'hidden lg:block' : ''}`}
          >
            <img
              src={logo}
              alt='logo'
              className='h-[30px] lg:h-[40px] object-contain'
            />
          </Link>
        </div>

        {/* Desktop Search Field and Search Lists */}
        <div className='hidden lg:block w-[50%] bg-secondary-hover rounded-full relative z-[999]'>
          {/* Search Input */}
          <SearchInput
            setFocused={setFocused}
            searchText={searchText}
            setSearchText={setSearchText}
            handleSearchSubmit={handleSearchSubmit}
          />
          <div
            className={`top-[60px] left-0 py-4 w-full absolute bg-secondary-hover transition-all opacity-100 rounded-lg ${
              focused ? 'block' : 'hidden  opacity-0'
            }`}
          >
            <div className='py-2 px-4 text-sm italic flex justify-between'>
              {searches.length > 0 ? (
                <>
                  <div>Recent searches</div>
                  <div
                    className='cursor-pointer hover:text-red-400'
                    onClick={() => {
                      setSearches([]);
                      window.localStorage.setItem('searches', '');
                    }}
                  >
                    Clear
                  </div>
                </>
              ) : (
                <div>No recent searches</div>
              )}
            </div>

            {/* Search List */}
            {searches.map((list, index) => {
              return (
                <SearchList
                  key={index}
                  index={index}
                  handleClickSearch={handleClickSearch}
                  handleRemoveSearches={handleRemoveSearches}
                  list={list}
                />
              );
            })}
          </div>
        </div>

        <div className='h-full relative flex gap-4 justify-end transition-all grow lg:grow-0'>
          {/* Mobile Search Field and Search Lists */}
          <div
            className={`block lg:hidden transition-all ${
              focused ? 'w-full' : 'w-[40px]'
            } lg:w-[50%] lg:bg-secondary-hover ${
              focused ? 'bg-secondary-hover' : 'bg-transparent'
            } rounded-full relative z-[999]`}
          >
            {/* Search Input */}
            <SearchInput
              setFocused={setFocused}
              searchText={searchText}
              setSearchText={setSearchText}
              handleSearchSubmit={handleSearchSubmit}
            />
            <div
              className={`top-[60px] left-0 py-4 absolute bg-secondary-hover transition-all opacity-100 rounded-lg ${
                focused ? 'block w-full' : 'hidden w-[0px] opacity-0'
              }`}
            >
              <div className='py-2 px-4 text-sm italic overflow-x-hidden flex justify-between'>
                {searches.length > 0 ? (
                  <>
                    <div>Recent searches</div>
                    <div
                      className='cursor-pointer hover:text-red-400'
                      onClick={() => {
                        setSearches([]);
                        window.localStorage.setItem('searches', '');
                      }}
                    >
                      Clear
                    </div>
                  </>
                ) : (
                  <div>No recent searches</div>
                )}
              </div>

              {/* Search List */}
              {searches.map((list, index) => {
                return (
                  <SearchList
                    key={index}
                    index={index}
                    handleClickSearch={handleClickSearch}
                    handleRemoveSearches={handleRemoveSearches}
                    list={list}
                  />
                );
              })}
            </div>
          </div>

          {/* Profile Menu */}
          <div className='hidden lg:block'>
            Welcome to{' '}
            <Link
              to='/'
              className='text-accent cursor-pointer hover:opacity-80'
            >
              Porkhub!
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navbar Desktop */}
      <div className='hidden lg:flex container justify-between items-center'>
        {menu.map((m, index) => {
          return (
            <Link
              to={m.path}
              key={index}
              onClick={() => setPath(m.path)}
              className={`cursor-pointer transition-all ${
                path == m.path ? 'bg-tertiary' : 'hover:bg-tertiary'
              } px-4 py-2 grow text-center`}
            >
              {m.title}
            </Link>
          );
        })}
      </div>

      {/* Bottom Navbar Mobile */}
      <div
        className={`flex lg:hidden justify-start items-start bg-secondary-hover h-full w-full flex-col fixed top-0 left-0 transition-all z-[1000] ${
          openMenu ? 'translate-x-[0%]' : 'translate-x-[-100%]'
        } `}
      >
        <div className='w-full flex flex-col'>
          <div className='flex p-4 justify-between items-center'>
            <Link to='/' onClick={() => setOpenMenu(false)}>
              <img src={logo} alt='logo' className='h-[40px]' />
            </Link>
            <button
              className='p-4 rounded-full hover:bg-tertiary'
              onClick={() => setOpenMenu(false)}
            >
              <X />
            </button>
          </div>
          {menu.map((m, index) => {
            return (
              <Link
                to={m.path}
                key={index}
                onClick={() => {
                  setOpenMenu(false);
                  setPath(m.path);
                }}
                className={`cursor-pointer ${
                  path == m.path ? 'bg-tertiary' : 'hover:bg-tertiary'
                } px-6 py-4 grow w-full`}
              >
                {m.title}
              </Link>
            );
          })}
        </div>
      </div>

      {/* input focus background */}
      {focused && (
        <div
          className='fixed h-screen w-screen top-0 left-0 bg-primary opacity-50 z-[998]'
          onClick={() => setFocused(false)}
        ></div>
      )}
    </div>
  );
}

export default Navbar;
