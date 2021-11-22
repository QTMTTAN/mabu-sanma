import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HeaderTabs(props) {
	/*
		State is now moved to Home.js
		const [activeTab, setActiveTab] = useState('Delivery');
	*/

  return (
    <View style={styles.tabsContainer}>
      <HeaderButton
				text='Delivery'
				btnColor='black'
				txtColor='white'
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
      <HeaderButton
				text='Pick-up'
				btnColor='white'
				txtColor='black'
				activeTab={props.activeTab}
				setActiveTab={props.setActiveTab}
			/>
    </View>
  )
}

/* Subcomponent: HeaderButton */
const HeaderButton = (props) => (
	<TouchableOpacity
		style={{
			backgroundColor: props.activeTab === props.text ? 'black' : 'white',
			paddingVertical: 6,
			paddingHorizontal: 16,
			borderRadius: 30
		}}
		onPress = {() => props.setActiveTab(props.text)}
	>
		<Text
			style={{
				color: props.activeTab === props.text ? 'white' : 'black',
				fontSize: 15,
				fontWeight: '900'
			}}
		>
			{props.text}
		</Text>
	</TouchableOpacity>
);
/* Subcomponent: HeaderButton*/

/* StyleSheet */
const styles = StyleSheet.create({
	tabsContainer: {
		alignSelf: 'center',
		flexDirection: 'row'
	}
})
/* StyleSheet */