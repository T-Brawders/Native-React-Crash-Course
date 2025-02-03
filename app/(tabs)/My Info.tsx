//import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

//import { Collapsible } from '@/components/Collapsible';
//import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
    headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }}
    headerImage={
      <Image
        source={require('@/assets/images/Saint-Martins-logo.svg')}
        style={styles.reactLogo}
      />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">My Info</ThemedText>
      </ThemedView>
      <ThemedText>Student Information</ThemedText>
      <ThemedText>
      <form>
      <label>
      Name:
      <input type="text" name="name" /><br></br>
      </label>
      <label>
      Student ID:
      <input type="text" name="name" />
      </label>
      <br></br>
      <input type="submit" value="Submit" />
      </form></ThemedText>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  reactLogo: {
    height: 190,
    width: 790,
    bottom: 0,
    left: 0,
    position: 'absolute',
  }
});
