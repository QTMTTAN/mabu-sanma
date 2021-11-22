import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function OrderItem({item}) {
  const {title, price} = item;

  return (
    <View style={styles.orderContainer}>
      <Text style={styles.orderTitle}>{title}</Text>
			<Text style={styles.orderPrice}>{price}</Text>
    </View>
  )
}

/* StyleSheet */
const styles = StyleSheet.create({
	orderContainer: {
		borderBottomColor: '#999',
		borderBottomWidth: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 18
	},
	orderTitle: {
		fontSize: 17,
		fontWeight: '600'
	},
	orderPrice: {
		fontSize: 17,
		opacity: 0.6
	}
})
/* StyleSheet */