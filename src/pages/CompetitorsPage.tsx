import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AntListItem from '../components/AntListItem';
import {useAnts} from '../hooks/useAnt';
import {Colors, Font} from '../styles';

export default function CompetitorsPage() {
  const insets = useSafeAreaInsets();
  const ants = useAnts();

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(ant) => ant.name}
          data={ants}
          ListHeaderComponent={() => (
            <Text style={[styles.title, {marginVertical: insets.top + 20}]}>
              COMPETITORS
            </Text>
          )}
          renderItem={({item}) => <AntListItem {...item} />}
          ItemSeparatorComponent={() => <View style={{height: 20}} />}
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
});
