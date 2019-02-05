import React from "react";
import { connect } from "react-redux";

import SmurfsList from "../components/SmurfsList";

import { getSmurfs } from "../actions";

class SmurfsListView extends React.Component {

    componentDidMount() {
        this.props.getSmurfs();
    }

    render() {
        if (this.props.isFetching) {
            return <h3>Loading Smurfs...</h3>;
        }
        return (
            <div>
                <SmurfsList smurfs={this.props.smurfs} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        smurfs: state.smurfs,
        isFetching: state.fetchingSmurfs
    };
}

export default connect(mapStateToProps, { getSmurfs })(SmurfsListView);