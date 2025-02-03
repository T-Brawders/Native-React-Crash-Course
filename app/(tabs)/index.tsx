import { Image, StyleSheet, Platform } from 'react-native';

//import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFFFFF', dark: '#FFFFFF' }}
      headerImage={
        <Image
          source={require('@/assets/images/Saint-Martins-logo.svg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Log-It!</ThemedText>
        <Image
          source={require('@/assets/images/Log-It-logo.webp')}
          style={styles.LogItLogo}
        />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Load It</ThemedText>
        <ThemedText>
          Load your information. 
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Log-It!</ThemedText>
        <ThemedText>
          Log your time. (Date, Start Time, and End time), 
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Check It</ThemedText>
        <ThemedText>
          Review your logged hours.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 190,
    width: 790,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  LogItLogo: {
    height: 40,
    width: 40,
    bottom: 0,
    left: 120,
    position: 'absolute',
  },
});
