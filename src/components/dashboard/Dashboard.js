import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import UserDetail from "./UserDetail";

export class Dashboard extends Component {
  render() {
    console.log(this.props);

    const { match } = this.props;

    return (
      <div className="row" stye={{ backgroundColor: "#f4f4f4" }}>
        <div className="col-3">
          <nav class="nav flex-column">
            <NavLink className="nav-link active" to={`${match.url}`}>
              Home
            </NavLink>
            <NavLink className="nav-link active" to={`${match.url}/users`}>
              Users
            </NavLink>
            <NavLink className="nav-link active" to={`${match.url}/news`}>
              News
            </NavLink>
          </nav>
        </div>
        <div className="col-9">
          <Switch>
            <Route path={`${match.path}`} exact>
              Hello Dashboard
            </Route>
            <Route path={`${match.path}/users`} exact>
              Hello users
            </Route>
            <Route path={`${match.path}/users/:id`} component={UserDetail} />
            <Route path={`${match.path}/news`}>Hello news</Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
