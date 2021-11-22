import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

export default function MenuItems({fastfoodName, foods, hideCheckbox, marginLeft}) {
	const dispatch = useDispatch();
	const selectItem = (item, checkboxValue) =>
		dispatch({
			type: 'ADD_TO_CART',
			payload: {
				...item,
				fastfoodName: fastfoodName,
				checkboxValue: checkboxValue
		}
	}); // pressing a checkbox will make this run and dispatch the item selected

	const cartItems = useSelector(
		(state) => state.cartReducer.selectedItems.items
	);

	const isFoodInCart = (food, cartItems) =>
		Boolean(cartItems.find((item) => item.title === food.title));

  return (
		<ScrollView showsVerticalScrollIndicator={false}>
			{foods.map((food, index) => (
				<View key={index}>
					<View style={styles.menuItemsContainer}>
						{hideCheckbox ? (
							<></>
						) : (
							<BouncyCheckbox
								iconStyle={{borderColor: 'grey', borderRadius: 5}}
								fillColor='yellowgreen'
								onPress={(checkboxValue) => selectItem(food, checkboxValue)}
								isChecked={isFoodInCart(food, cartItems)}
							/>
						)}
						<FoodInfo food={food} />
						<FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
					</View>
					<Divider width={0.5} orientation='vertical' style={styles.menuItemsDivider} />
				</View>
			))}
		</ScrollView>
  )
}

/* Subcomponent: FoodInfo */
const FoodInfo = (props) => (
	<View style={styles.foodInfoContainer}>
		<Text style={styles.foodInfoTitle}>{props.food.title}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
)
/* Subcomponent: FoodInfo */

/* Subcomponent: FoodImage */
const FoodImage = ({marginLeft, ...props}) => (
	<View>
		<Image
			source={{uri: props.food.image}}
			style={{
				width: 110,
				height: 110,
				borderRadius: 10,
				marginLeft: marginLeft
			}}
		/>
	</View>
)
/* Subcomponent: FoodImage */

/* StyleSheet */
const styles = StyleSheet.create({
	menuItemsContainer: {
		flexDirection: 'row-reverse',
		justifyContent: 'space-evenly',
		margin: 20
	},
	menuItemsDivider: {
		marginHorizontal: 12
	},
	foodInfoContainer: {
		justifyContent: 'center',
		marginLeft: 20,
		marginRight: 15,
		width: 240
	},
	foodInfoTitle: {
		fontSize: 20,
		fontWeight: '600'
	}
})
/* StyleSheet */

/* Hardcoded data: Array of foods
	Has been moved to FastfoodDetail.js
Hardcoded data: Array of foods */