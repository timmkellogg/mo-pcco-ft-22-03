class Counter extends React.Component {

    state = {
        count: 0
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    //add a decrement!

    render() {
        return (
            <div>
                {this.state.count}
                <br/>
                <button onClick={this.increment}>+</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.querySelector('#app')) //args what to render, where to render it