import React, { Component, findDOMNode, PropTypes } from 'react';

export default class Searchbar extends React.Component {

	render() {
		return (
			<div>
				<input type="text" ref="q"/>
				<input type="button" onClick={e => this.search(e)} value="submit"/>
			</div>
		);
	}

	search(e){
		const node = findDOMNode(this.refs.q);
		const text = node.value.trim();
		this.props.onSearch(text);
		node.value = '';
	}
}

Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired
};