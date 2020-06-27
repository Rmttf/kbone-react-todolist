import React,{ Component } from 'react';
import './index.css';
import { AppContext } from "../../App";

class Item extends Component {
    constructor(props){
        super(props);
    };

    render() {
        const left_class = this.props.complete ? 'finished' : '';
        return (
            <AppContext.Consumer>
                {
                    data => (
                        <li>
                            <div type="flex" justify="center" align="middle">
                                <div span={12} className="left">
                                    <input className={left_class} checked={this.props.complete} onChange={data.changeComplete.bind(this,this.props.id)}>{this.props.content}</input>
                                </div>
                                <iv span={12} className="right">
                                    <button type="danger" onClick={data.deleteDate.bind(this,this.props.id)}>删除</button>
                                </iv>
                            </div>
                        </li>
                    )
                }
            </AppContext.Consumer>
        )
    }
};

export default Item;
