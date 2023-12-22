import { recipes } from '../../utils';
import { useState } from 'react';
import RecipeItem from '../../components/RecipeItem';

function Recipes() {
  const [count, setCount] = useState(6);

  return (
    <div className='flex justify-center py-6 grow'>
      <div className='container'>
        <h1 className='px-4 lg:px-0 text-lg mb-4'>
          <span className='text-accent'>Hot</span> Recipes of Pork
        </h1>
        <div className='flex flex-wrap'>
          {recipes.slice(0, count).map((recipe, index) => {
            return (
              <RecipeItem
                key={index}
                title={recipe.title}
                thumbnail={recipe.thumbnail}
                link={recipe.link}
              />
            );
          })}
        </div>
        {count < recipes.length && (
          <div className='text-center mt-6'>
            <button
              onClick={() => setCount((prev) => prev + 6)}
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
