import React from 'react';
import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';
import {Ant} from '../models/Ant';
import {Colors, Font} from '../styles';
import ant from '../../assets/ant_uncut-removebg-preview.png';

export default function AntListItem({
  color,
  length,
  name,
  weight,
  probability,
  state,
}: Ant) {
  return (
    <View style={styles.container}>
      <View style={[styles.circleView, {backgroundColor: color.toLowerCase()}]}>
        <Image
          style={{width: '70%', height: '70%'}}
          source={ant as ImageSourcePropType}
        />
      </View>
      <View style={styles.antDetailsContainer}>
        <Text style={styles.antNameText}>{name}</Text>
        <Text style={styles.antDetailsText}>Length: {length}</Text>
        <Text style={styles.antDetailsText}>Weigth: {weight}</Text>
      </View>
      <View style={styles.probabilityContainer}>
        {probability ? (
          <Text style={styles.probabilityText}>{`${(probability * 100).toFixed(
            0,
          )}%`}</Text>
        ) : (
          <Text style={styles.notCalculatedText}>{state}</Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleView: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  antDetailsContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: 10,
  },
  antNameText: {
    fontFamily: Font.REGULAR,
    color: Colors.WHITE,
    fontSize: 18,
    paddingBottom: 5,
  },
  antDetailsText: {
    fontFamily: Font.REGULAR,
    color: Colors.WHITE,
    fontSize: 14,
  },
  probabilityContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '25%',
  },
  probabilityText: {
    fontFamily: Font.BOLD,
    color: Colors.WHITE,
    fontSize: 28,
  },
  notCalculatedText: {
    fontFamily: Font.BOLD,
    color: Colors.WHITE,
    fontSize: 12,
  },
});
