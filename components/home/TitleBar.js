import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function TitleBar() {
  return (
    <View style={styles.barContainer}>
      {/* Logo sana na ilalagay */}
      <Text style={styles.txtTitle}>MAR-BUT-SANMA-FAFO-RES</Text>
      <View>
        <Ionicons
          name='fast-food'
          size={40}
        />
      </View>
    </View>
  )
}

/* StyleSheet */
const styles = StyleSheet.create({
	barContainer: {
    alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center'
	},
  txtTitle: {
    fontSize: 25,
    fontWeight: '700',
    marginTop: 3,
    marginRight: 10,
    paddingVertical: 5
  }
})
/* StyleSheet */