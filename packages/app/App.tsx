import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Provider, useDispatch, useSelector} from 'react-redux';

import {RootState, store} from '@my-app/controllers/store';
import {increment} from '@my-app/controllers/features/counterSlice';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.screen}>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={{textAlign: 'center', paddingTop: 40, fontSize: 24}}>
            Hello code sharing test{' '}
          </Text>
          <Button />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const Button = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(increment())}>
      <Text>{count}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {flex: 1},
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 16,
    alignItems: 'center',
    margin: 16,
    padding: 16,
  },
});

export default App;
