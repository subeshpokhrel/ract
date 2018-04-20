import React, {Component} from 'react';

class PaginationButton extends Component {
    constructor(props)
    {
        super(props);
        this.handleClick = this
            .handleOnClick
            .bind(this);

    }

    render()
    {
        return <span className={this.props.className} onClick={(e) => this.handleOnClick(e)}>
            {this.props.pagenr}
        </span>;
    }

    handleOnClick()
    {

        this
            .props
            .onclickhandler(this.props.pagenr);
    }

}
export default PaginationButton