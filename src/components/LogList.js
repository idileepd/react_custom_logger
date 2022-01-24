import React from "react";
import { connect } from "react-redux";
import { consoleLog } from "../actions";

class LogList extends React.Component {
  render() {
    return (
      <div>
        {this.props.logsList.length > 0 && (
          <div>
            <h1>Logs List Component</h1>
            <ul>
              {this.props.logsList.map(function (item, i) {
                // console.log("test");
                return <li key={i}>{item}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //   console.log(state);
  return { logsList: state.logsList };
};

export default connect(mapStateToProps, {
  //actions if needed
  consoleLog,
})(LogList);
