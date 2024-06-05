import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { APPOINTMENT_TITLE_FIELD } from "../appointment/AppointmentTitle";

export const NotaryServicePerformedList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Notary Service Performeds"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField
          label="Appointment"
          source="appointment.id"
          reference="Appointment"
        >
          <TextField source={APPOINTMENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Service Charge" source="serviceCharge" />
        <TextField label="Service Description" source="serviceDescription" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
