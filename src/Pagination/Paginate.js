import React, {Component} from 'react';
import Pagination from './Pagination'

class Paginate extends Component {
    constructor(props)
    {
        super(props);
        this.getItems = this
            .getItems
            .bind(this);
    }

    getItems() {
        return this.props.items;
    }

    render() {
        return (<Pagination items={this.getItems}/>);
    }
}

export default Paginate;