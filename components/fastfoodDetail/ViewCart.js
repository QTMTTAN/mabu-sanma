import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector } from 'react-redux';
import OrderItem from './OrderItem';
import firebase from '../../firebase';
import LottieView from 'lottie-react-native';

export default function ViewCart({navigation}) {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	const {items, fastfoodName} = useSelector((state) => state.cartReducer.selectedItems);
	const total = items
		.map((item) => Number(item.price.replace('₱', '')))
		.reduce((prev, curr) => prev + curr, 0);
		/*
			replace ₱10.99 > 10.99 to call Number('10.99') > 10.99 >
			tot = [10.99, 23.50, 9.51] > reduce tot > 10.99 + 23.50 + 9.51 > 44
		*/

	const totalPHP = total.toLocaleString('en', {
		style: 'currency',
		currency: 'PHP'
	});

	const addOrderToFirebase = () => {
		setLoading(true);
		const db = firebase.firestore();
		db.collection('orders')
			.add({
				items: items,
				fastfoodName: fastfoodName,
				createdAt: firebase.firestore.FieldValue.serverTimestamp()
			})
			.then(() => {
				setTimeout(() => {
					setLoading(false);
					navigation.navigate('OrderCompleted');
				}, 3000);
			});
		};

	const checkoutModalContent = () => {
		return (
			<>
				<View style={styles.modalContainer}>
					<View style={styles.modalCheckoutContainer}>
						<Text style={styles.checkoutFastfood}>{fastfoodName}</Text>
						{items.map((item, index) => (
							<OrderItem key={index} item={item} />
						))}
						<View style={styles.subtotalContainer}>
							<Text style={styles.subtotalTxt}>Subtotal</Text>
							<Text>{totalPHP}</Text>
						</View>
						<View style={styles.subtotalCheckout}>
							<TouchableOpacity
								style={styles.subtotalBtn}
								
								onPress={() =>
									{
										setModalVisible(false);
										addOrderToFirebase();
								}}
							>
								<Text style={styles.checkoutTxt}>Checkout</Text>
								<Text style={styles.checkoutTotal}>{total ? totalPHP : ''}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</>
		)
	}

  return (
		<>
			<Modal
				animationType='fade'
				visible={modalVisible}
				transparent={true}
				onRequestClose={() => setModalVisible(false)}
			>
				{checkoutModalContent()}
			</Modal>
			{total ? (
				<View style={styles.cartContainer}>
					<View style={styles.cartContainer2}>
						<TouchableOpacity
							style={styles.cartContainer3}
							onPress={() => setModalVisible(true)}
						>
							<View>
								<Ionicons
									name='cart'
									color= 'white'
									size={36}
								/>
							</View>
							<Text style={styles.cartTxt}>VIEW CART</Text>
							<Text style={styles.phpTxt}>{totalPHP}</Text>
						</TouchableOpacity>
					</View>
				</View>
			) : (
				<></>
			)}
			{loading ? (
				<View style={styles.loadingContainer}>
					<LottieView
						style={styles.loadingItem}
						source={require('../../assets/animations/78259-loading.json')}
						autoPlay
						speed={1.5}
					/>
				</View>
			 ) : (
			 	<></>
			 )}
		</>
  )
}

/* StyleSheet */
const styles = StyleSheet.create({
	modalContainer: {
		backgroundColor: 'rgba(0,0,0,0.7)',
		flex: 1,
		justifyContent: 'flex-end'
	},
	modalCheckoutContainer: {
		backgroundColor: 'white',
		borderWidth: 0.5,
		height: 600,
		padding: 18
	},
	checkoutFastfood: {
		fontSize: 22,
		fontWeight: '700',
		marginBottom: 15,
		textAlign: 'center'
	},
	subtotalContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 25
	},
	subtotalTxt: {
		fontSize: 20,
		fontWeight: '700',
		marginBottom: 15,
		textAlign: 'left'
	},
	subtotalCheckout: {
		flexDirection: 'row',
		justifyContent: 'center'
	},
	subtotalBtn: {
		alignItems: 'flex-start',
		backgroundColor: 'black',
		borderRadius: 20,
		marginTop: 25,
		padding: 15,
		position: 'relative',
		width: 300
	},
	checkoutTxt: {
		color: 'white',
		fontSize: 20
	},
	checkoutTotal: {
		color: 'white',
		fontSize: 18,
		position: 'absolute',
		right: 15,
		top: 16.5
	},

	cartContainer: {
		alignItems: 'center',
		bottom: 110,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		position: 'absolute',
		zIndex: 999
	},
	cartContainer2: {
		flexDirection: 'row',
		justifyContent: 'center',
		width: '100%'
	},
	cartContainer3: {
		backgroundColor: 'black',
		borderRadius: 40,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		marginTop: 20,
		padding: 15,
		position: 'relative',
		width: 300
	},
	cartTxt: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 20,
		marginRight: 30,
		marginLeft: 10
	},
	phpTxt: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 20
	},

	loadingContainer: {
		alignItems: 'center',
		backgroundColor: 'black',
		height: '100%',
		width: '100%',
		justifyContent: 'center',
		opacity: 0.9,
		position: 'absolute'
	},
	loadingItem: {
		height: '100%'		
	}
})
/* StyleSheet */