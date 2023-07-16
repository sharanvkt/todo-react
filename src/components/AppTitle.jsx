import React, { Component } from 'react'


class AppTitle extends Component {
    constructor({ children }) {
        super()
        this.children = children
    }
    render() {
        return (
            <>
                <div>
                    <h1 className="h1">{this.children}</h1>
                </div>

            </>
        )
    }
}

export default AppTitle