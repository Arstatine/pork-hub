import { Link } from 'react-router-dom';

function RecipeItem({ link, thumbnail, title }) {
  return (
    <div className='w-full sm:w-1/2 lg:w-1/3  overflow-hidden '>
      <Link to={link} target='_blank' className='group relative'>
        <img
          src={thumbnail}
          alt={title}
          className='aspect-video object-cover group-hover:scale-105 transition-all'
        />
        <div className='absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,.75)] text-center px-4 py-3'>
          {title}
        </div>
      </Link>
    </div>
  );
}

export default RecipeItem;
