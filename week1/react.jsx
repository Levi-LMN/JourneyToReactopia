// Import React and useState hook
import React, { useState } from 'react';

// Functional component Counter
function Counter() {
  // State variable count and its updater function setCount
  const [count, setCount] = useState(0);

  // Event handler for incrementing the count
  const handleIncrement = () => {
    setCount(count + 1);
  };

  // Event handler for decrementing the count
  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

// Export the Counter component
export default Counter;
