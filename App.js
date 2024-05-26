import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text>My Name is Nsiah Kofi Dennis</Text>
      <Text style={{fontWeight: "bold"}}>My Name is Nsiah Kofi Dennis </Text>
      
    
        
        
       
      <StatusBar style="={{ backgroundColor: 'aqua (#00ffff)'}}" />
      
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
  },
});
