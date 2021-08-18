import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateProduct from "./CreateProduct";
import CreateUser from "./CreateUser";
import Dashboard from "./Dashboard";
import EditProduct from "./EditProduct";
import EditUser from "./EditUser";
import Products from "./Products";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Users from "./Users";

function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">
        <Sidebar></Sidebar>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className="container-fluid">
              <Switch>
                <Route path="/" component={Dashboard} exact={true}></Route>
                <Route path="/user" component={Users} exact={true}></Route>
                <Route
                  path="/user/create"
                  component={CreateUser}
                  exact={true}
                ></Route>
                <Route
                  path="/user/edit/:id"
                  component={EditUser}
                  exact={true}
                ></Route>
                <Route
                  path="/product"
                  component={Products}
                  exact={true}
                ></Route>
                <Route
                  path="/product/create"
                  component={CreateProduct}
                  exact={true}
                ></Route>
                <Route
                  path="/product/edit/:id"
                  component={EditProduct}
                  exact={true}
                ></Route>
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
