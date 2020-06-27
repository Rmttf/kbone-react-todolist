import React, { Component } from 'react';
import './index.css';

class Header extends Component {
    render() {
        return (
            <div type="flex" justify="center" align="middle">
                <div span={12}>
                    <h1 className="Header-head">
                        TodoList
                    </h1>
                </div>
            </div>
        );
    }
}

export default Header;
