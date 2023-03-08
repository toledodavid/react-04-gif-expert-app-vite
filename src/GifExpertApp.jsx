import { useState } from 'react';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Vikings', 'Dragon ball']);

  console.log(categories);

  return(
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}

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