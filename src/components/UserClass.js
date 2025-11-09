import { Component } from "react";
import UserContext from "../utils/UserContext";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1,
    };
    // console.log(this.props.name + "constructor");
  }

  componentDidMount() {
    // console.log(this.props.name + "component did mount");
  }

  render() {
    // console.log(this.props.name + "render");

    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>count: {count}</h1>
        <div>
          loggedUser:
          <UserContext.Consumer>
            {({ name }) => <h1>{name}</h1>}
          </UserContext.Consumer>
        </div>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count increase
        </button>
        <h1>count: {count2}</h1>
        <h1>name: {name}</h1>
        <h3>location: {location}</h3>
        <h3>name from userContext: </h3>
      </div>
    );
  }
}

export default UserClass;
