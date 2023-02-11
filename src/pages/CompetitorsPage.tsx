import React from 'react';
import {Text, StyleSheet, SafeAreaView} from 'react-native';
import {useAnts} from '../hooks/useAnt';
import {Colors} from '../styles';

export default function CompetitorsPage() {
  const ants = useAnts();

  return (
    <SafeAreaView style={styles.container}>
      {ants?.map((ant) => (
        <Text>{ant.name}</Text>
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
  },
});
