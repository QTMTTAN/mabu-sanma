let defaultState = {
	selectedItems: {items: [], fastfoodName: ''}
};

let cartReducer = (state = defaultState, action) => {
	switch (action.type) {
		case 'ADD_TO_CART': {
			let newState = {...state};

			if (action.payload.checkboxValue) {
				console.log('ADD TO CART')

				newState.selectedItems = {
					items: [...newState.selectedItems.items, action.payload],
					fastfoodName: action.payload.fastfoodName
				};
			} else {
				console.log('REMOVE FROM CART')
				newState.selectedItems = {
					items: [
						...newState.selectedItems.items.filter(
							(item) => item.title !== action.payload.title)
					],
					fastfoodName: action.payload.fastfoodName
				};
			}

			console.log(newState, '👌');
			return newState;		
		}

		default:
			return state;
	}
}

export default cartReducer;