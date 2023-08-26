import { StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import CategoryScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <CategoryScreen />
    </>

  );
}

const styles = StyleSheet.create({
  container: {
  },
});
