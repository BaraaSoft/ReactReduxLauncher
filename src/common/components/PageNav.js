import React, { Component } from 'react';

class PageNav extends Component {

    render() {
        return (
            <div style={{ boxSizing: 'border-box', width: '100%', padding: "0px 30px 15px 30px" }}>
                {this.props.children}
            </div>
        );
    }
}
export { PageNav };