//import Ionicons from '@expo/vector-icons/Ionicons';
import {StyleSheet, Image} from 'react-native';//"Platform" removed from items to import

//import { Collapsible } from '@/components/Collapsible';
//import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText } from '@/components/ThemedText';
import {ThemedView } from '@/components/ThemedView';
import React from 'react';
import View from 'react-native-reanimated';

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
        <ThemedText type="title">Log Time</ThemedText>
      </ThemedView>
      <ThemedText>Log Your Practicum Time.</ThemedText>
      <ThemedText>
      <form>
      <label>
      <ThemedText>Date:</ThemedText>
      <input type="text" name="name" />
      </label>
      <br></br>
      <label>
      <ThemedText>Start Time:</ThemedText>
      <input type="text" name="name" />
      </label>
      <br></br>
      <label>
      <ThemedText>Stop Time:</ThemedText>
      <input type="text" name="name" />
      </label>
      <br></br>
      <input type="submit" value="Submit" />
      </form>
      </ThemedText>
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
