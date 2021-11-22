import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
import Categories from '../components/home/Categories';
import FastfoodItems, { localFastfoods } from '../components/home/FastfoodItems';
import HeaderTabs from '../components/home/HeaderTabs';
import TitleBar from '../components/home/TitleBar';

/* Yelp API key */
const YELP_API_KEY = 'qp92xKQeV0keHe5ZSbsTdbzizybakY3avZ0uja1GbJvlVTZINP1TwsL7AUl7zerbOkEk3UK-PjQRp90TRkqSwVhbXj0Scr4pU1-qAP4U-sDUzpCzPheF8uEL9V2YYXYx';
/* Yelp API key */

export default function Home({navigation}) {
	const [fastfoodsData, setFastfoodsData] = useState(localFastfoods);
	const [city, setCity] = useState('San_Mateo_City'); // For changing city, by searching
	const [activeTab, setActiveTab] = useState('Delivery'); // For filtering restaurants, by delivery or pick-up

	const getFastfoodsFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=Fast_Food_Restaurants&location=${city}`;
		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`
			}
		};

		return fetch(yelpUrl, apiOptions)
			.then((res) => res.json())
			.then((json) => 
				setFastfoodsData(
					json.businesses/*.filter((business) =>
						business.transactions.include(activeTab.toLowerCase())
					)*/ // filters if active tab is delivery or pick-up, commented because error "unhandled promise rejection" that I don't know how to fix
				)
			)
	};

 /* Reloads data if "city" or/and "activeTab" was/were changed */	
	useEffect(() => {
		getFastfoodsFromYelp();
	}, [/*city, activeTab*/]);

  return (
    <SafeAreaView style={styles.homeContainer}>
			<View style={styles.headerContainer}>
      	<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<TitleBar />
			</View>
			<Divider width={2} />
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<FastfoodItems
					fastfoodsData={fastfoodsData}
					navigation={navigation}
				/>
			</ScrollView>
			<Divider width={2} />
			<BottomTabs />
    </SafeAreaView>
  )
}

/* StyleSheet */
const styles = StyleSheet.create({
	homeContainer: {
		backgroundColor: '#eee',
		flex: 1
	},
	headerContainer: {
		backgroundColor: 'white',
		padding: 15
	}
})
/* StyleSheet */