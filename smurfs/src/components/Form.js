import React from 'react';

class Form extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            age: 0,
            height: ''
        };
    };

    handleChanges = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    addNewSmurf = event => {
        event.preventDefault();
        this.props.addSmurf(this.state);
    };

    render() {
        return (

            <div>

                <form>

                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='name'
                        value={this.state.name}
                        placeholder='Name'
                    />

                    <input
                        onChange={this.handleChanges}
                        type='number'
                        name='age'
                        value={this.state.age}
                        placeholder='Age'
                    />

                    <input
                        onChange={this.handleChanges}
                        type='text'
                        name='height'
                        value={this.state.height}
                        placeholder='Height'
                    />

                    <button onClick={this.addNewSmurf}>Add Smurf</button>

                </form>

            </div>
        );
    }
}

export default Form;