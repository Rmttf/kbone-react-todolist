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
                            <div className="row">
                                <div className="left">
                                    <input id={`checkbox-${this.props.id}`} type="checkbox" className={left_class} checked={this.props.complete} onChange={data.changeComplete.bind(this,this.props.id)} />
                                    <label htmlFor={`checkbox-${this.props.id}`}>
                                        {this.props.content}
                                    </label>
                                </div>
                                <div className="right">
                                    <button type="danger" onClick={data.deleteDate.bind(this,this.props.id)}>删除</button>
                                </div>
                            </div>
                        </li>
                    )
                }
            </AppContext.Consumer>
        )
    }
};

export default Item;
