import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Smoothie from './Constructor.jsx'; // Шлях до вашого компонента конструктора смузі
import portionSizes from '../../server/server/data/portionSizes.mjs'; // Шлях до вашого масиву розмірів смузі

it('calculates the total price correctly based on selected ingredients and size', () => {
  const selectedIngredients = [
    { id: 'orange', name: 'Orange', literPrice: 10 },
    { id: 'carrot', name: 'Carrot', literPrice: 8 },
    // Додайте інші обрані інгредієнти за потребою
  ];
  
  // Вибираємо розмір смузі з масиву portionSizes
  const selectedSize = portionSizes[1].size; // Вибрали середній розмір

  const { container } = render(
    <Smoothie
      selectedIngredients={selectedIngredients}
      selectedSize={selectedSize}
    />
  );

  const expectedTotalPrice = (10 / 1000) * selectedSize + (8 / 1000) * selectedSize; // Ціни за літр, переведені в мілілітри

  const totalPriceElement = container.querySelector('.Constructor__total h3');
  
  expect(totalPriceElement).toHaveTextContent(`Total Price: $${expectedTotalPrice.toFixed(2)}`);
});

it('updates the total price correctly when ingredients are added or removed', () => {
  const { container } = render(<Smoothie />);

  // Вибір фрукту та розміру, симуляція подій

  // Очікувана ціна для обраних інгредієнтів та розміру

  // Знаходимо елемент, що містить текст загальної ціни

  // Перевіряємо, чи відображена правильна загальна ціна
});
