import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Vikings']);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);

    // SAME BUT USING THE CALLBACK FROM THE setCategories
    // setCategories(categories => [...categories, 'Valorant']);
  };

  return(
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onNewCategory={value => onAddCategory(value)} />

      {
        categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))
      }
    </>
  );
}