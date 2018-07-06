import axios from 'axios';

export function itemsAreLogIn(bool){
		return {
				type: 'ITEMS_ARE_LOG_IN',
				LogedIn: bool
		};
}

export function itemsFetchDataSuccess(items) {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        items
    };
}

export function itemsFetchData(url) {
    return (dispatch) => {
        axios.get(url,
					{
						headers:{'authorization':'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YjFhMDY0ZjAyYTA5MzY1NmM0MDk3ZTUiLCJ1c2VybmFtZSI6InRlc3QyIiwicGFzc3dvcmQiOiIkMmEkMTAkVDdWb3hULmRtMEx4OGhEQXEyVkxwZXc4Zi9odThkeGNmMVpvUVRwcC84SGwzL1FxQzFxUEciLCJfX3YiOjAsImlhdCI6MTUyODQzMzc3NX0.BhoXEeo8F4ibry543WEX1kPSxHYO_b7FuksVMoXmvYM'},
						proxy:{
							host:'139.99.100.228',
							port:7000
						}
					}
				)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }
								dispatch(itemsAreLogIn(true))
                return response;
            })
            .then((response) => {
							dispatch(itemsFetchDataSuccess(response.data));
						})
            .catch((err) => {
							console.log(err)
						});
    };
}