import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeApp } from './src/components/module/home/HomeApp';
import RootNavigator from './src/navigation/RootNavigator';

function App() {
  return (
    // <SafeAreaProvider>
    //   <HomeApp />
    // </SafeAreaProvider>
    <RootNavigator />
  );
}

export default App;
