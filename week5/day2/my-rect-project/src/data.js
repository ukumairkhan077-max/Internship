const faqs = [
  {
    id: 1,
    question: "What is React?",
    answer:
      "React is a JavaScript library developed by Facebook for building fast and interactive user interfaces using reusable components."
  },
  {
    id: 2,
    question: "What is JSX?",
    answer:
      "JSX stands for JavaScript XML. It allows you to write HTML-like syntax inside JavaScript, making React components easier to read and write."
  },
  {
    id: 3,
    question: "What is the useState Hook?",
    answer:
      "The useState Hook allows functional components to store and manage state. Updating the state automatically re-renders the component."
  },
  {
    id: 4,
    question: "Why do we use keys in React?",
    answer:
      "Keys help React identify which items have changed, been added, or removed. They improve rendering performance when working with lists."
  },
  {
    id: 5,
    question: "What is the Virtual DOM?",
    answer:
      "The Virtual DOM is a lightweight copy of the real DOM. React compares it with the previous version and updates only the changed elements in the browser."
  },
  {
    id: 6,
    question: "What is the difference between props and state?",
    answer:
      "Props are used to pass data from a parent component to a child component, while state stores data that belongs to the component itself and can change over time."
  }
];

export default faqs;