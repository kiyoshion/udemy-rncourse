import { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';

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
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/cat.jpg')} />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal'
          onChangeText={goalInputHandler}
          value={enterdGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color='#aa33aa' />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={props.onCancel} color='#aaa' />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    backgroundColor: '#333333',
  },
  textInput: {
    backgroundColor: '#aaa',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    width: '80%',
    marginRight: 8,
    padding: 16,
  },
  image: {
    width: 100,
    height: 50,
    margin: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
});
