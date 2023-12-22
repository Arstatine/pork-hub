import { Link } from 'react-router-dom';

function MarketPlace({ link, logo, title }) {
  return (
    <Link className='w-full sm:w-1/2 lg:w-1/3 p-2' to={link} target='_blank'>
      <div className='flex justify-end items-center flex-col bg-secondary hover:bg-[rgba(255,255,255,.1)] cursor-pointer py-12 aspect-video'>
        <img
          src={logo}
          className='object-contain aspect-video p-12 w-full lg:w-[75%]'
        />
        <div>{title}</div>
      </div>
    </Link>
  );
}

export default MarketPlace;
