import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/fastfoodDetail/MenuItems';
import firebase from '../firebase';

export default function OrderCompleted() {
	const [lastOrder, setLastOrder] = useState({
		items: [
			{
				title: 'Crispy Strips Bucket',
				description: 'Get 12 pieces of our Crispy Strips!',
				price: '₱308.00',
				image: 'https://www.kfc.com.ph/Content/OnlineOrderingImages/Menu/Items/xs/CSBUCKET.png'
			}
		]
	})

	/* from ViewCart.js */
  const {items, fastfoodName} = useSelector((state) => state.cartReducer.selectedItems);
	const total = items
		.map((item) => Number(item.price.replace('₱', '')))
		.reduce((prev, curr) => prev + curr, 0);

	const totalPHP = total.toLocaleString('fil', {
		style: 'currency',
		currency: 'PHP'
	});
	/* from ViewCart.js */

	useEffect(() => {
		const db = firebase.firestore();
		const unscubscribe = db
			.collection('orders')
			.orderBy('createdAt', 'desc')
			.limit(1)
			.onSnapshot((snapshot) => {
				snapshot.docs.map((doc) => {
					setLastOrder(doc.data());
				});
			});

		return () => unscubscribe();
	}, []);

  return (
		<SafeAreaView style={styles.orderScrBackground}>
			<View style={styles.orderScrItems}>
			<LottieView
				style={styles.orderAnimation1}
				source={require('../assets/animations/68077-order-submit-check.json')}
				autoPlay
				speed={0.5}
				loop={false}
			/>
			<Text style={styles.orderTxt}>
				Your order at {fastfoodName} has been placed for {totalPHP}
			</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<MenuItems foods={lastOrder.items} hideCheckbox={true} />
				<LottieView
					style={styles.orderAnimation2}
					source={require('../assets/animations/61198-delivery-service.json')}
					autoPlay
					speed={2}
				/>
			</ScrollView>
			</View>
		</SafeAreaView>
  )
}

/* StyleSheet */
const styles = StyleSheet.create({
	orderScrBackground: {
		backgroundColor: 'white',
		flex: 1
	},
	orderScrItems: {
		alignItems: 'center',
		height: '100%',
		margin: 18
	},
	orderAnimation1: {
		alignSelf: 'center',
		height: 100,
		marginBottom: 20
	},
	orderAnimation2: {
		alignSelf: 'center',
		height: 220
	},
	orderTxt: {
		fontSize: 20,
		fontWeight: 'bold',
		paddingBottom: 15
	}
})
/* StyleSheet */