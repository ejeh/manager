import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CardSection, InputField} from './common';
import {employeeUpdate} from '../actions';
import {Picker, Text, StyleSheet, View} from 'react-native';

class EmployeeForm extends Component {
  render() {
    const {employeeUpdate} = this.props;
    return (
      <View>
        <CardSection>
          <InputField
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => employeeUpdate({prop: 'name', value})}
          />
        </CardSection>
        <CardSection>
          <InputField
            label="Phone"
            placeholder="555-555-555"
            value={this.props.phone}
            onChangeText={value => employeeUpdate({prop: 'phone', value})}
          />
        </CardSection>
        <CardSection>
          <Text style={styles.pickerTextStyle}>Shift</Text>
        </CardSection>
        <CardSection>
          <Picker
            style={{flex: 1}}
            selectedValue={this.props.shift}
            onValueChange={value => employeeUpdate({props: 'shift', value})}>
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
  },
});

const mapStateToProp = state => {
  const {name, phone, shift} = state.employeeForm;
  return {
    name,
    phone,
    shift,
  };
};
export default connect(mapStateToProp, {employeeUpdate})(EmployeeForm);
