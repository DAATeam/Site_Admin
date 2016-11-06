const React = require('react');
const ReactDOM = require('react-dom');
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {test: 'Hello'};
    }
    render() {
        return (
            <div>
                <div>{this.state.test}</div>
                <div>Test</div>
            </div>
        )
    }
}
ReactDOM.render(
    <App />,
    document.getElementById('react')
)