import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { NOTARY_TITLE_FIELD } from "../notary/NotaryTitle";

export const AppointmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Appointments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Client" source="client" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Date" source="date" />
        <TextField label="Duration" source="duration" />
        <TextField label="ID" source="id" />
        <TextField label="Location" source="location" />
        <ReferenceField label="Notary" source="notary.id" reference="Notary">
          <TextField source={NOTARY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Notes" source="notes" />
        <TextField label="Status" source="status" />
        <TextField label="Time" source="time" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
