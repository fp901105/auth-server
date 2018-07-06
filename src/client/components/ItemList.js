import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { itemsFetchData } from '../actions/items';

class ItemList extends Component {
		handleClick() {
			this.props.fetchData('/api');
		}
		
    render() {
				console.log('render: ')
				console.log(this.props)
        return (
            <div style={setMargin}>
								<button onClick={()=> this.handleClick()}>button</button>
                <span>{this.props.items}</span>
            </div>
        );
    }
}

var setMargin = {
    padding: "0px 200px 20px 200px"
};

var setDistanceBetweenItems = {
    marginBottom: "5px"
};

const mapStateToProps = (state) => {
    return {
        items: state.items,
				LogedIn: state.itemsAreLogIn
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);