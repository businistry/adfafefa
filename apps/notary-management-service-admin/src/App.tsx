import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NotaryList } from "./notary/NotaryList";
import { NotaryCreate } from "./notary/NotaryCreate";
import { NotaryEdit } from "./notary/NotaryEdit";
import { NotaryShow } from "./notary/NotaryShow";
import { NotaryServicePerformedList } from "./notaryServicePerformed/NotaryServicePerformedList";
import { NotaryServicePerformedCreate } from "./notaryServicePerformed/NotaryServicePerformedCreate";
import { NotaryServicePerformedEdit } from "./notaryServicePerformed/NotaryServicePerformedEdit";
import { NotaryServicePerformedShow } from "./notaryServicePerformed/NotaryServicePerformedShow";
import { AppointmentList } from "./appointment/AppointmentList";
import { AppointmentCreate } from "./appointment/AppointmentCreate";
import { AppointmentEdit } from "./appointment/AppointmentEdit";
import { AppointmentShow } from "./appointment/AppointmentShow";
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
        title={"Notary Management Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Notary"
          list={NotaryList}
          edit={NotaryEdit}
          create={NotaryCreate}
          show={NotaryShow}
        />
        <Resource
          name="NotaryServicePerformed"
          list={NotaryServicePerformedList}
          edit={NotaryServicePerformedEdit}
          create={NotaryServicePerformedCreate}
          show={NotaryServicePerformedShow}
        />
        <Resource
          name="Appointment"
          list={AppointmentList}
          edit={AppointmentEdit}
          create={AppointmentCreate}
          show={AppointmentShow}
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
