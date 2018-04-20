import React, {Component} from 'react';
import PaginationButtons from  './PaginationButton'

class Pagination extends Component {
    constructor(props)
    {
        super(props);
        this.paginationButtonClicked = this
            .paginationButtonClicked
            .bind(this);
        this.state = {
            clickedChildPageNr: 1
        }
    }

    componentWillMount()
    {
        this.setState({
            count: this.props.items.length
        })

    }

    paginationButtonClicked(pageNrClicked)
    {
        this.setState({clickedChildPageNr: pageNrClicked});
    }

    render()
    {
        if (this.state.count > 0) {
            var buttonArray = [];

            for (var i = 1; i <= this.state.count; i++) {
                var classNames = "notactive";
                if (this.state.clickedChildPageNr === i) {
                    var classNames = "active";
                }
                buttonArray.push(<PaginationButtons
                    className={classNames}
                    onclickhandler={this.paginationButtonClicked}
                    pagenr={i}/>);
            }
            return (
                <li>{buttonArray}</li>
            )
        }

        return null;
    }
}
export default Pagination