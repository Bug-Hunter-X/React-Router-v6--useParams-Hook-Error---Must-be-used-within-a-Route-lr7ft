In React Router Dom v6, a common mistake is incorrectly using the `useParams` hook outside of a component that is rendered within a route.  For example:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams(); // Error: useParams must be used within a Route
  return <div>ID: {id}</div>;
}

export default MyComponent;
```

This will result in an error because `useParams` relies on the routing context provided by the `Route` component. 