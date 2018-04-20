import React, {Component} from 'react';
import Paginate from './Pagination/Paginate.js';

class UserListingComponent extends React.Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            items: [
                {
                    name: "subesh1"
                }, {
                    name: "subesh2"
                }, {
                    name: "subesh3"
                }, {
                    name: "subesh4"
                }, {
                    name: "subesh5"
                }, {
                    name: "subesh6"
                }, {
                    name: "subesh7"
                }, {
                    name: "pokhrel8"
                }/**/
            ]
        };
    }

    render()
    {
        return <div className="wrapper">
            <Paginate items={this.state.items}/>
        </div>

    }

}

export default UserListingComponent;
