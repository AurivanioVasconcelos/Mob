import { NavigationContainer } from '@react-navigation/native';
import RoutesCrud from './components/crudFirebase/RoutesCrud';

export default function App() {
  return (
    <NavigationContainer>
      <RoutesCrud />
    </NavigationContainer>
  );
}
