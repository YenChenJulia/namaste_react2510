import UserCard from "./userCard";
import UserClass from "./UserClass";
import { Component } from "react";

// const About = () => {
//   return (
//     <div>
//       <h1>this is About page</h1>
//       <UserCard name={"aaaaa"} />
//       <UserClass name={"bbbb"} location={"tainan"} />
//     </div>
//   );
// };

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }

  componentDidMount() {
    console.log("parent component did mount");
  }
  render() {
    console.log("parent render");

    return (
      <div>
        <h1>this is About page</h1>
        <UserClass name={"aaaa"} location={"tainan"} />
        <UserClass name={"bbbb"} location={"taipei"} />
      </div>
    );
  }
}

export default About;
