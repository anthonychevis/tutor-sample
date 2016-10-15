import React, {Component} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import styles from './Styles/HomeStyle';
import { Images } from '../Themes';

class HomeContainer extends Component {
    render() {
        return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.section}>
            <Text style={styles.sectionText}>
                Welcome home!
            </Text>
            <Text style={styles.subtitle} >
              Soft-touch
            </Text>
          </View>

        </ScrollView>
      </View>
        );
    }
}




export default HomeContainer;