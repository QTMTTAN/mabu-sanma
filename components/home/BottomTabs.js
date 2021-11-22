import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Divider } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BottomTabs() {
  return (
		<View style={styles.tabsContainer}>
			<Icon text='a' icon='chess-pawn' icon2='chess-rook' />
			<Icon text='b' icon='chess-pawn' icon2='chess-knight' />
			<Icon text='c' icon='chess-pawn' icon2='chess-bishop' />
			<Icon text='d' icon='chess-pawn' icon2='chess-queen' />
			<Icon text='e' icon='chess-pawn' icon2='chess-king' />
			<Icon text='f' icon='chess-pawn' icon2='chess-bishop' />
			<Icon text='g' icon='chess-pawn' icon2='chess-knight' />
			<Icon text='h' icon='chess-pawn' icon2='chess-rook' />
		</View>
  )
}

/* Subcomponent: Icon */
const Icon = (props) => (
	<View>
		<TouchableOpacity>
			<View>
				<FontAwesome5
					name={props.icon}
					size={20}
					style={styles.tabsIcon}
				/>
			</View>
		</TouchableOpacity>
		<Divider width={1} paddingTop={2} paddingHorizontal={20}/>
		<TouchableOpacity>
			<View>
				<FontAwesome5
						name={props.icon2}
						size={24}
						style={styles.tabsIcon}
					/>
				</View>
		</TouchableOpacity>
		<Text style={styles.tabsTxt}>{props.text}</Text>
	</View>
)
/* Subcomponent: Icon */

/* StyleSheet */
const styles = StyleSheet.create({
	tabsContainer: {
		backgroundColor: '#fff',
		borderRadius: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		marginVertical: 5,
		marginHorizontal: 15
	},
	tabsIcon: {
		alignSelf: 'center',
		marginVertical: 1
	},
	tabsTxt: {
		alignSelf: 'center',
		color: 'grey'
	}
})
/* StyleSheet */