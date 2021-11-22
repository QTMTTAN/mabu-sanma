import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

export default function Categories() {
  return (
		<View style={styles.ctgContainer}>
			<Text style={styles.ctgCategoryTxt}>Categories • Categories • Categories</Text>
			<Divider width={1} padding={2} />
			<ScrollView horizontal showsHorizontalScrollIndicator={false}>
				{/* start of loop */}
				{items.map((item, index) => (
					<View key={index} style={styles.ctgContainer2}>
						<Image source={item.image} style={styles.ctgItems}/>
						<Text style={styles.txtItems}>{item.text}</Text>
					</View>
				))}
				{/* end of loop */}
			</ScrollView>
		</View>
  )
}

/* Array of items */
const items = [
	{
		/* image from https://www.flaticon.com/authors/mikan933 */
		image: require('../../assets/images/categories/take-away.png'),
		text: 'Pick-up'
	},
	{
		/* https://www.flaticon.com/packs/party-and-celebration-63 */
		image: require('../../assets/images/categories/beer.png'),
		text: 'Soft Drinks'
	},
	{
		/* https://www.flaticon.com/packs/thanksgiving-123 */
		image: require('../../assets/images/categories/bread.png'),
		text: 'Bakery Items'
	},
	{
		/* https://www.flaticon.com/packs/food-delivery-119 */
		image: require('../../assets/images/categories/fast-food.png'),
		text: 'Fast Foods'
	},
	{
		/* https://www.flaticon.com/packs/food-delivery-119 */
		image: require('../../assets/images/categories/food-delivery.png'),
		text: 'Deals'
	},
	{
		/* https://www.flaticon.com/packs/coffee-shop-245 */
		image: require('../../assets/images/categories/coffee.png'),
		text: 'Coffee & Tea'
	},
	{
		/* https://www.flaticon.com/packs/birthday-party-88 */
		image: require('../../assets/images/categories/ice-cream.png'),
		text: 'Desserts'
	}
]
/* Array of items */

/* StyleSheet */
const styles = StyleSheet.create({
	ctgContainer: {
		backgroundColor: '#fff',
		marginTop: 5,
		paddingHorizontal: 20,
		paddingVertical: 10
	},
	ctgCategoryTxt: {
		alignSelf: 'center',
		fontSize: 18,
		fontWeight: '700',
		paddingBottom: 5
	},
	ctgContainer2: {
		alignItems: 'center',
		marginHorizontal: 15
	},
	ctgItems: {
		height: 40,
		width: 50,
		marginTop: 5,
		resizeMode: 'contain'
	},
	txtItems: {
		fontSize: 13,
		fontWeight: '900'
	}
})
/* StyleSheet */