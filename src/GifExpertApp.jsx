import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Vikings', 'Dragon ball']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

    // SAME BUT USING THE CALLBACK FROM THE setCategories
    // setCategories(categories => [...categories, 'Valorant']);
  };

  return(
    <>
      <h1>GifExpertApp</h1>

      {/* Input */}
      <AddCategory onNewCategory={value => onAddCategory(value)} />

      <ol>
        {
          categories.map((category) => (
            <li key={category}>{category}</li>
          ))
        }
      </ol>
    </>
  );
}