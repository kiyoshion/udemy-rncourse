import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

function GoalInput(props) {
  const [enterdGoalText, setEnterdGoalText] = useState('');

  function goalInputHandler(enterdText) {
    setEnterdGoalText(enterdText);
  };

  function addGoalHandler() {
    props.onAddGoal(enterdGoalText);
    setEnterdGoalText('');
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder='Your course goal'
        onChangeText={goalInputHandler}
        value={enterdGoalText}
      />
      <Button title='Add Goal' onPress={addGoalHandler} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
});
