import React, {Component} from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import {CardSection} from './common';
import {Text} from 'react-native';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
  onRowPress() {
    Actions._employeeEdit({employee: this.props.employee.item});
  }
  render() {
    const {name} = this.props.employee.item;
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>{name}</Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  },
});
export default ListItem;
