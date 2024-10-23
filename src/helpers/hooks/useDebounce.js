import { useEffect, useState } from "react";

// Хук для создания дебаунс задержки
export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value); // Устанавливаем значение после задержки
    }, delay);

    return () => {
      clearTimeout(handler); // Очищаем таймер при каждом новом вводе
    };
  }, [value, delay]); // Зависит от value и delay

  return debouncedValue;
};
