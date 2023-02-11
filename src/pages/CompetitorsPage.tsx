import React, {useCallback} from 'react';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntListItem from '../components/AntListItem';
import {useAnts} from '../hooks/useAnt';
import {Ant} from '../models/Ant';
import {Colors, Font} from '../styles';

export default function CompetitorsPage() {
  const insets = useSafeAreaInsets();
  const {ants, isCalculating, calculateAntWinProbability} = useAnts();

  const handleStartRace = useCallback(() => {
    calculateAntWinProbability();
  }, [calculateAntWinProbability]);

  const renderItem = useCallback(
    ({item}: {item: Ant}) => <AntListItem {...item} />,
    [],
  );

  const renderHeader = useCallback(
    () => (
      <View>
        <Text
          style={[styles.title, {marginTop: insets.top + 20, marginBottom: 20}]}
        >
          COMPETITORS
        </Text>
        <View style={styles.headerDescriptionContainer}>
          <Text style={styles.headerDescription}>Win Pr.</Text>
        </View>
      </View>
    ),
    [insets.top],
  );

  const renderSeparator = useCallback(() => <View style={{height: 20}} />, []);

  const renderFooter = useCallback(
    () => (
      <TouchableOpacity
        disabled={isCalculating}
        onPress={handleStartRace}
        activeOpacity={0.4}
        style={styles.startButton}
      >
        {isCalculating ? (
          <ActivityIndicator size={20} />
        ) : (
          <Text
            style={{
              fontSize: 22,
              color: Colors.WHITE,
              fontFamily: Font.BOLD,
            }}
          >
            START RACE
          </Text>
        )}
      </TouchableOpacity>
    ),
    [isCalculating, handleStartRace],
  );

  const sortAnts = (a: Ant, b: Ant) => {
    if (a.probability && b.probability) {
      return b.probability - a.probability;
    }
    if (a.probability) {
      return -1;
    }
    if (b.probability) {
      return 1;
    }
    return 0;
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(ant) => ant.name}
          data={ants?.sort(sortAnts)}
          ListHeaderComponent={renderHeader}
          renderItem={renderItem}
          ItemSeparatorComponent={renderSeparator}
          ListFooterComponent={renderFooter}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    flex: 1,
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontFamily: Font.BOLD,
    color: Colors.WHITE,
    alignSelf: 'center',
  },
  startButton: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: '80%',
    height: 80,
    backgroundColor: Colors.BUTTON,
    borderRadius: 10,
  },
  headerDescriptionContainer: {
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  headerDescription: {
    color: Colors.WHITE,
    fontFamily: Font.SEMIBOLD,
  },
});
