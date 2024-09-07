import { Image, StyleSheet, Platform, View, Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Link } from 'expo-router';

export default function HomeScreen() {
  return (
    <View style={styles.container} >
      <Text>
         hi there
      </Text>
      <Link href='/home' style={{color:"blue"}}>go to home</Link>
    </View>
  );
}

const styles = StyleSheet.create({
   container:{
     display:'flex',
     flex:1,
     alignItems:'center',
     justifyContent:'center',
   }
});
