// Debouncing is a programming technique used to limit the number of times a function is executed. It ensures that a function is only called after a specified delay following the last time the function was invoked. This is particularly useful in scenarios like:

// Search Input Fields: Prevents sending an API request every time a user types.

// Window Resize Events: Prevents performance issues by limiting execution.

// Button Clicks: Avoids accidental multiple clicks.





export const debounce = (fn, timeout) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, timeout);
    };
  };
  