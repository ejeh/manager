import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, StyleSheet, SaveAreaView} from 'react-native';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
  }

  componentWillReceiveProps(nexProps) {
    nexProps;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        renderItem={({item}) => <ListItem employee={{item}} />}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: Constants
  },
});

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });

  return {employees};
};
export default connect(mapStateToProps, {employeesFetch})(EmployeeList);
