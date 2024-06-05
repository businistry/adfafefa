import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { APPOINTMENT_TITLE_FIELD } from "./AppointmentTitle";
import { NOTARY_TITLE_FIELD } from "../notary/NotaryTitle";

export const AppointmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="NotaryServicePerformed"
          target="appointmentId"
          label="Notary Service Performeds"
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
            <TextField
              label="Service Description"
              source="serviceDescription"
            />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
