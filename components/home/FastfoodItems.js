import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function FastfoodItems({navigation, ...props}) {
  return (
		<>
			{props.fastfoodsData.map((fastfoods, index) => (
				<TouchableOpacity
					key={index}
					activeOpacity={1}
					style={styles.ffItems}
					onPress={() =>
						navigation.navigate('FastfoodDetail', {
							name: fastfoods.name,
							image: fastfoods.image_url,
							price: fastfoods.price,
							reviews: fastfoods.review_count,
							rating: fastfoods.rating,
							categories: fastfoods.categories
						})
					}
				>
					<View style={styles.ffItems2}>
						<FastfoodImage image={fastfoods.image_url} />
						<FastfoodInfo name={fastfoods.name} rating={fastfoods.rating} />
					</View>
				</TouchableOpacity>
			))}
		</>
  )
}

/* Subcomponent: FastfoodImage */
const FastfoodImage = (props) => (
	<>
		<Image
			source={{
				uri: props.image
			}}
			style={styles.ffImage}
		/>
		<TouchableOpacity style={styles.heartIcon}>
			<MaterialCommunityIcons name='heart-outline' size={25} color='#fff' />
		</TouchableOpacity>
	</>
)
/* Subcomponent: FastfoodImage */

/* Subcomponent: FastfoodInfo */
const FastfoodInfo = (props) => (
	<View style={styles.ffInfo}>
		<View>
			<Text style={styles.infoName}>{props.name}</Text>
			<Text style={styles.infoTime}>20-30 • min</Text>
		</View>
		<View style={styles.infoRate}>
			<Text>{props.rating}</Text>
		</View>
	</View>
)
/* Subcomponent: FastfoodInfo */

/* Hardcoded data | Array of localFastfoods */
export const localFastfoods = [
	{
		name: 'KFC',
		img_url: 'https://cdn.mos.cms.futurecdn.net/gFdRukHS2KR2oK9xj8TxHT-970-80.png',
		categories: ['Chicken Shop', 'Chicken Wings'],
		price: '₱₱',
		reviews: 1634,
		rating: 4.7
	},
	{
		name: 'Mang Inasal',
		img_url: 'http://images.summitmedia-digital.com/yummyph/images/2020/04/07/mang-inasal-ready-to-cook-01.jpg',
		categories: ['Filipino', 'Barbecue'],
		price: '₱₱',
		reviews: 2370,
		rating: 4.2
	},
	{
		name: "McDonald's",
		img_url: 'https://assets2.rappler.com/2021/06/131402571_4116868641695698_7637867226676693555_n-1623740237924.jpeg',
		categories: ['Burgers', 'Fries'],
		price: '₱₱',
		reviews: 1965,
		rating: 4.3
	}
]
/* Hardcoded data | Array of localFastfoods */

/* StyleSheet */
const styles = StyleSheet.create({
	ffItems: {
		marginBottom: 5
	},
	ffItems2: {
		backgroundColor: 'white',
		marginTop: 10,
		padding: 15
	},
	ffImage: {
		height: 220,
		width: '100%'
	},
	heartIcon: {
		position: 'absolute',
		right: 20,
		top: 20
	},
	ffInfo: {
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 10
	},
	infoName: {
		fontSize: 16,
		fontWeight: 'bold'
	},
	infoTime: {
		color: 'grey',
		fontSize: 14
	},
	infoRate: {
		alignItems: 'center',
		backgroundColor: '#eee',
		borderRadius: 15,
		height: 30,
		width: 30,
		justifyContent: 'center'
	}
})
/* StyleSheet */