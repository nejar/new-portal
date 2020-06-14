import React, { Component } from "react";

export class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Nejar", age: 26, id: "1" },
        { name: "raja", age: 26, id: "1" },
        { name: "praksh", age: 26, id: "1" },
        { name: "suraj", age: 26, id: "1" },
      ],
    };
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Id</th>
            </tr>

            {this.state.data.map((user) => (
              <tr>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.id}</td>
              </tr>
            ))}
            <tr>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Content;
