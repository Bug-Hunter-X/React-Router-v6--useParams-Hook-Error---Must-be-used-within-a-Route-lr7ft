The correct way to use `useParams` is within a component rendered by a `Route`:

```javascript
import { useParams } from 'react-router-dom';

function MyComponent() {
  const { id } = useParams();
  return <div>ID: {id}</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/:id" element={<MyComponent />}>
      </Route>
    </Routes>
  );
}

export default App;
```

This ensures that `useParams` has access to the routing context and will correctly read the parameter from the URL.  The `Route` component provides the necessary context for `useParams` to function.