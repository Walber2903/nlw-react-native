import { StatusBar } from 'react-native';
import { 
  useFonts, 
  Inter_400Regular, 
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black 
} from '@expo-google-fonts/inter';

import { Background } from './src/Components/Background';
import { Routes } from './src/routes';
import { Loading } from './src/Components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black 
  });

  return (
    <Background>
      <StatusBar 
        // barStyle="light-content"
        // backgroundColor="transparent"
      />
      { fontsLoaded ? <Routes /> : <Loading />}
    </Background>
  );
}
