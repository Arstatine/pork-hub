import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='text-center py-4 bg-secondary mt-4'>
      Made by{' '}
      <Link
        to='https://github.com/Arstatine'
        target='_blank'
        className='text-accent hover:opacity-80'
      >
        Arstatine
      </Link>
    </div>
  );
}

export default Footer;
