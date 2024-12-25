```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render
    console.log('Count:', count); // This line will cause an infinite loop
    setCount(count + 1); 
  }, [count]);

  return <div>Count: {count}</div>;
}
```