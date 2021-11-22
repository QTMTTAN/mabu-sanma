import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-elements';
import About from '../components/fastfoodDetail/About';
import MenuItems from '../components/fastfoodDetail/MenuItems';
import ViewCart from '../components/fastfoodDetail/ViewCart';

export default function FastfoodDetail({route, navigation}) {
  return (
    <View>
      <About route={route} />
      <Divider width={3} style={{marginVertical:15}} />
			<MenuItems fastfoodName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  )
}

/* Hardcoded data: Array of foods */
const foods = [
	{
		title: 'Crispy Strips Bucket',
		description: 'Get 12 pieces of our Crispy Strips!',
		price: '₱308.00',
		image: 'https://www.kfc.com.ph/Content/OnlineOrderingImages/Menu/Items/xs/CSBUCKET.png'
	},
	{
		title: '2-PC Chicken Meal with Fixin',
		description: '2 pieces of our signature Original Recipe or Hot and Crispy chicken paired with steamed rice and your choice of drink.',
		price: '₱205.00',
		image: 'https://www.kfc.com.ph/Content/OnlineOrderingImages/Menu/Items/xs/2PCCOBSIDE.png'
	},
	{
		title: 'Crispy Strips Spaghetti Meal',
		description: '3 pieces of Crispy Strips paired with our improved spaghetti and a drink of your choice.',
		price: '₱135.00',
		image: 'https://www.kfc.com.ph/Content/OnlineOrderingImages/Menu/Items/xs/CSSPAGML.png'
	},
	{
		title: 'Zinger',
		description: 'Our signature big spicy sandwich made with crunchy Zinger chicken fillet topped with fresh lettuce and mayonnaise, slid in between a soft seeded bun.',
		price: '₱125.00',
		image: 'https://www.kfc.com.ph/Content/OnlineOrderingImages/Menu/Items/xs/ZNGR.png'
	}
]
/* Hardcoded data: Array of foods */