import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ProductList } from "./product/ProductList";
import { ProductCreate } from "./product/ProductCreate";
import { ProductEdit } from "./product/ProductEdit";
import { ProductShow } from "./product/ProductShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { AdminPanelList } from "./adminPanel/AdminPanelList";
import { AdminPanelCreate } from "./adminPanel/AdminPanelCreate";
import { AdminPanelEdit } from "./adminPanel/AdminPanelEdit";
import { AdminPanelShow } from "./adminPanel/AdminPanelShow";
import { PersonalAreaList } from "./personalArea/PersonalAreaList";
import { PersonalAreaCreate } from "./personalArea/PersonalAreaCreate";
import { PersonalAreaEdit } from "./personalArea/PersonalAreaEdit";
import { PersonalAreaShow } from "./personalArea/PersonalAreaShow";
import { SiteCurrencyList } from "./siteCurrency/SiteCurrencyList";
import { SiteCurrencyCreate } from "./siteCurrency/SiteCurrencyCreate";
import { SiteCurrencyEdit } from "./siteCurrency/SiteCurrencyEdit";
import { SiteCurrencyShow } from "./siteCurrency/SiteCurrencyShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"OnlineShopService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Product"
          list={ProductList}
          edit={ProductEdit}
          create={ProductCreate}
          show={ProductShow}
        />
        <Resource
          name="Order"
          list={OrderList}
          edit={OrderEdit}
          create={OrderCreate}
          show={OrderShow}
        />
        <Resource
          name="AdminPanel"
          list={AdminPanelList}
          edit={AdminPanelEdit}
          create={AdminPanelCreate}
          show={AdminPanelShow}
        />
        <Resource
          name="PersonalArea"
          list={PersonalAreaList}
          edit={PersonalAreaEdit}
          create={PersonalAreaCreate}
          show={PersonalAreaShow}
        />
        <Resource
          name="SiteCurrency"
          list={SiteCurrencyList}
          edit={SiteCurrencyEdit}
          create={SiteCurrencyCreate}
          show={SiteCurrencyShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
