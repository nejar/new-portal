import React, { Component } from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import UserDetail from "./UserDetail";
import NewsCard from "./NewsCard";
import SingleNews from "./SingleNews";
import NewsList from "./NewsList";

export class Dashboard extends Component {
  render() {
    console.log(this.props);

    const { match } = this.props;

    return (
      <div className="row" style={{ backgroundColor: "#f4f4f4" }}>
        <div className="col-3 sidebar-bg-color">
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
            <Route path={`${match.path}/news`} component={NewsList} exact />
            {/* <Route path={`${match.path}/news`} component={NewsCard} exact /> */}
            {/* <Route path={`${match.path}/news/:id`} component={SingleNews} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default Dashboard;
