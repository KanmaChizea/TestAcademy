import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeApp } from './src/components/home/HomeApp';
function App() {
  return (
    <SafeAreaProvider>
      <HomeApp />
    </SafeAreaProvider>
  );
}

export default App;
