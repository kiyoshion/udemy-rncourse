import { StyleSheet, View, Text, Pressable } from 'react-native'

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#ddd'}}
        onPress={props.onDelete.bind(this, props.id)}
        style={(pressed) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#555',
  },
  pressedItem: {
    opacity: .5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
