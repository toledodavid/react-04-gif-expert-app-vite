import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Vikings', 'Dragon ball']);

  const onAddCategory = () => {
    setCategories(['Valorant', ...categories]);

    // SAME BUT USING THE CALLBACK FROM THE setCategories
    // setCategories(categories => [...categories, 'Valorant']);
  };

  return(
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}

      <button onClick={onAddCategory}>Add</button>

      <ol>
        {
          categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))
        }
      </ol>
    </>
  );
}