import React, { useState } from 'react';
import ErrorMessage from '../errorMessage/ErrorMessage';

function ErrorBoundary({ children }) {
  const [error, setError] = useState(null);

  const resetError = () => {
    setError(null);
  };

  if (error) {
    return (
      <div>
        <ErrorMessage />
        <p>{error.toString()}</p>
        <button onClick={resetError}>Try Again</button>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
