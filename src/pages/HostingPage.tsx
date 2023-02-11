import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import {Colors, Font} from '../styles';
import Animated, {FadeIn} from 'react-native-reanimated';
import {FontAwesome5} from '@expo/vector-icons';

interface HostingPageProps {
  handleNextPage: () => void;
}

export default function HostingPage({handleNextPage}: HostingPageProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Animated.Text entering={FadeIn.duration(2000)} style={styles.title}>
          {"Today we're hosting another ant race!"}
        </Animated.Text>
      </View>
      <Animated.View
        entering={FadeIn.delay(2000).duration(1000)}
        style={styles.buttonContainer}
      >
        <Text style={styles.buttonTitle}>MEET THE COMPETITORS</Text>
        <TouchableOpacity onPress={handleNextPage} activeOpacity={0.4}>
          <View style={styles.circleView}>
            <FontAwesome5
              name="chevron-right"
              size={40}
              color={Colors.BACKGROUND}
            />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: 10,
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: Font.BOLD,
    color: Colors.WHITE,
    fontSize: 32,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  buttonTitle: {
    fontFamily: Font.BOLD,
    color: Colors.WHITE,
    fontSize: 20,
    marginBottom: 20,
  },
  circleView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 5,
  },
});
