import React,{ Component } from 'react';
import './index.css';
import { AppContext } from "../../App";

class Editor extends Component {
    constructor(props){
        super(props);
        this.input = React.createRef();
    }

    render() {
        return (
            <AppContext.Consumer>
                {
                    data => (
                      <div>
                          <div>
                              <input
                                ref={this.input}
                                className="Editor-input"
                                type="text"
                                placeholder="请输入..."
                                onKeyPress={e => e.nativeEvent.keyCode === 13 ? data.changeState.call(this, this.input) : null}/>
                          </div>
                          <div>
                              <button type="primary" onClick={data.changeState.bind(this, this.input)}>保存</button>
                          </div>
                      </div>
                    )
                }
            </AppContext.Consumer>
        )
    }
}

export default Editor
