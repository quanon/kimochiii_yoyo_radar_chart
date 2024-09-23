import { useState, useEffect } from 'react';

export const useQueryState = (paramName, initialValue) => {
  const [value, setValue] = useState(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const paramValue = searchParams.get(paramName);

    return paramValue !== null ? JSON.parse(paramValue) : initialValue;
  });

  useEffect(() => {
    const currentSearchParams = new URLSearchParams(window.location.search);

    if (value) {
      currentSearchParams.set(paramName, JSON.stringify(value));
    } else {
      currentSearchParams.delete(paramName);
    }

    const newUrl = [window.location.pathname, currentSearchParams.toString()].filter(Boolean).join('?');

    window.history.replaceState(window.history.state, '', newUrl);
  }, [paramName, value]);

  return [value, setValue];
};
