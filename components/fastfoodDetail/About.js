import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function About(props) {
	const {name, image, price, reviews, rating, categories} =
		props.route.params;
	const formattedCategories = categories.map((cat) => cat.title).join(' • ');
	const description = `${formattedCategories} ${price ? ' • ' + price : ''} • 💳 • ${rating} ⭐️ (${reviews}+)`;
  
	return (
    <View>
      <FastfoodImage image={image} />
      <FastfoodName name={name} />
      <FastfoodDescription description={description} />
    </View>
  )
}

/* Subcomponent: FastfoodImage, FastfoodTitle, FastfoodDescription */
const FastfoodImage = (props) => (
  <Image source={{uri: props.image}} style={styles.fastfoodImg} />
);

const FastfoodName = (props) => (
	<Text style={styles.fastfoodTxt}>{props.name}</Text>
)

const FastfoodDescription = (props) => (
	<Text style={styles.fastfoodDesc}>{props.description}</Text>
)
/* Subcomponent: FastfoodDescription, FastfoodTitle, FastfoodImage */

/* StyleSheet */
const styles = StyleSheet.create({
	fastfoodImg: {
		height: 180,
		width: '100%'
	},
	fastfoodTxt: {
		fontSize: 28,
		fontWeight: '700',
		marginHorizontal: 15,
		marginTop: 10
	},
	fastfoodDesc: {
		fontSize: 16,
		fontWeight: '400',
		marginHorizontal: 15,
		marginTop: 5
	}
})
/* StyleSheet */

/* Subcomponent that will be displayed instead of the hardcoded data, but is now using props.route.params */
/*	
	const yelpFastfoodInfo = {
		name: 'KFC',
		image: 'https://cdn.mos.cms.futurecdn.net/gFdRukHS2KR2oK9xj8TxHT-970-80.png',
		price: '₱₱',
		reviews: '1500',
		rating: 4.5,
		categories: [
			{title: 'Chicken Wings'},
			{title: 'Fast Food'}
		]
	}
*/
/* Subcomponent that will be displayed instead of the hardcoded data, but is now using props.route.params */

/* Hardcoded data */
/*
	const image = 'https://cdn.mos.cms.futurecdn.net/gFdRukHS2KR2oK9xj8TxHT-970-80.png';
	const title = 'KFC';
	const description = 'Chicken Wings • Fast Food • ₱₱ • 💳 • 4 ⭐️ (2913+)';
*/
/* Hardcoded data */