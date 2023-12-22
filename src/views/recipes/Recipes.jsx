import { Link } from 'react-router-dom';
import { recipes } from '../../utils';
import { useState } from 'react';

function Recipes() {
  const [count, setCount] = useState(6);

  return (
    <div className='flex justify-center py-6'>
      <div className='container'>
        <h1 className='px-4 lg:px-0 text-lg mb-4'>
          <span className='text-accent'>Hot</span> Recipes of Pork
        </h1>
        <div className='flex flex-wrap'>
          {recipes.slice(0, count).map((recipe, index) => {
            return (
              <div
                className='w-full sm:w-1/2 lg:w-1/3  overflow-hidden '
                key={index}
              >
                <Link
                  to={recipe.link}
                  target='_blank'
                  className='group relative'
                >
                  <img
                    src={recipe.thumbnail}
                    alt={recipe.title}
                    className='aspect-video object-cover group-hover:scale-105'
                  />
                  <div className='absolute bottom-0 left-0 w-full bg-[rgba(0,0,0,.75)] text-center px-4 py-3'>
                    {recipe.title}
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
        {count < recipes.length && (
          <div className='text-center mt-6'>
            <button
              onClick={() => setCount((prev) => prev + 3)}
              className='py-2 border px-4 rounded-sm hover:bg-accent hover:text-primary hover:border-accent'
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipes;
