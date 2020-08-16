import React, { Component } from "react";
// import Axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
// import Login from "./components/login";
import Workout from "./components/Workout";
import fire from "./config/Fire";
import { Layout } from "antd";
import "./App.css";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import fire from "./config/Fire";
import SignUp from "./components/signup";
import { Button, Col, Row, PageHeader } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import Profile from "./components/Profile";
import TeamView from "./components/TeamView";
import ActiveDay from "./components/ActiveDay";
import { UserOutlined } from "@ant-design/icons";
import NoMatch from "./components/NoMatch";

// import ReactSpring from "./components/Animations/ReactSpring/ReactSpring";
// import NoMatchAnimate from "./components/Animations/NoMatchAnimate";

import ReactSpring from "./components/Animations/ReactSpring/ReactSpring";

const { Header } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.state = {
      user: {},
      logoutRedirect: false,
      profileRedirect: false,
    };
  }

  // componentDidMount() {
  //   this.removeAuthListener = fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({
  //         authenticated: true,
  //       });
  //     } else {
  //       this.setState({
  //         authenticated: false,
  //       });
  //     }
  //   });
  // };
  handleProfileClick() {
    console.log("Profile button clicked");
    this.setState({ profileRedirect: true });
  }

  logout() {
    fire.auth().signOut();
    localStorage.clear();
    this.setState({ logoutRedirect: true });
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        const emailPrefix = user.email.split("@");
        localStorage.setItem("email", emailPrefix[0]);
        // setUser(user);
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentDidMount() {
    this.authListener();
  }

  render() {
    if (this.state.profileRedirect) {
      this.setState({ profileRedirect: false });
      console.log("You are going to be redirected.");
      return (
        <Router>
          <Redirect to="/profile" />
        </Router>
      );
    }
    if (this.state.logoutRedirect === true) {
      this.setState({ logoutRedirect: false });
      return (
        <Router>
          <Redirect to="/" />
        </Router>
      );
    }
    if (this.state.user) {
      return (
        <div className="App">
          <Router>
            {/* <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={32}> */}
            {/* <Layout>
                  <Header className="heading">
                    <Link to="/" className="title"
                    style ={{marginLeft: "15%"}}>
                      Healthy Competition
                    </Link>
                    <Button
                      icon={<LogoutOutlined />}
                      style={{
                        backgroundColor: "lightsteelblue",
                        marginTop: "15px",
                        color: "white",
                        float: "right",
                      }}
                      onClick={this.logout}
                    >
                      Log Out
                    </Button>
                    <Button
                      icon={<UserOutlined />}
                      style={{
                        backgroundColor: "darksalmon",
                        color: "white",
                        float: "right",
                        marginTop: "15px",
                      }}
                      onClick={this.handleProfileClick}
                    >
                      Profile
                    </Button>
                   
      
                  </Header>
                </Layout> */}
            <div className="site-page-header-ghost-wrapper">
              <PageHeader
                // title="Healthy Competition"
                style={{ backgroundColor: "darksalmon", color: "white" }}
                extra={[
                  <Button
                    icon={<UserOutlined />}
                    onClick={this.handleProfileClick}
                  >
                    Profile
                  </Button>,
                  <Button icon={<LogoutOutlined />} onClick={this.logout}>
                    Log Out
                  </Button>,
                ]}
              >
                <Link to={"/"} className="title" style={{ fontSize: "36px" }}>
                  Healthy Competition
                </Link>
              </PageHeader>
            </div>
            {/* </Col>
            </Row> */}

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/workout" component={Workout} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/team" component={TeamView} />
              <Route exact path="/activeday" component={ActiveDay} />
              <Route component={NoMatch} />
              {/* <Route exact path = "/testspring" component = {NoMatchAnimate}/> */}
              {/* render= if lift state */}
              {/* <Route exact path = "/clicktest" component = {Clicktest}/> */}
            </Switch>
          </Router>
        </div>
      );
    }
    return (
      <div className="App">
        <Router>
          {/* <Layout>
            <Header className="heading">
              <Link to={"/"} className="title">
                Healthy Competition
              </Link>
              {this.state.user ? (
                <Button
                  icon={<LogoutOutlined />}
                  style={{
                    marginLeft: "90%",
                    backgroundColor: "lightsteelblue",
                    marginBottom: "20%",
                    color: "white",
                  }}
                  onClick={this.logout}
                >
                  Log Out
                </Button>
              ) : null}
            </Header>
          </Layout> */}
          {/* <Login /> */}
          {/* {this.state.user ? <Home /> : <Login />} */}
          <div className="site-page-header-ghost-wrapper">
            <PageHeader style={{ backgroundColor: "darksalmon" }}>
              <Link to={"/"} className="title" style={{ fontSize: "36px" }}>
                Healthy Competition
              </Link>
            </PageHeader>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/workout" component={Workout} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/team" component={TeamView} />
            <Route exact path="/activeday" component={ActiveDay} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
