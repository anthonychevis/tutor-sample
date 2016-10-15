import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import AllComponentsScreen from './AllComponentsScreen';
import NavigationRouter from '../Navigation/NavigationRouter';
import styles from './Styles/RootContainerStyle'

class RootContainer extends Component {
    render() {
        return (
            <View style={styles.applicationView}>
                <StatusBar barStyle='light-content' />
                <NavigationRouter />
            </View>
        );
    }
}

export default RootContainer;