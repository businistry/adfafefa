import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { AppointmentTitle } from "../appointment/AppointmentTitle";

export const NotaryServicePerformedCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="appointment.id"
          reference="Appointment"
          label="Appointment"
        >
          <SelectInput optionText={AppointmentTitle} />
        </ReferenceInput>
        <NumberInput label="Service Charge" source="serviceCharge" />
        <TextInput
          label="Service Description"
          multiline
          source="serviceDescription"
        />
      </SimpleForm>
    </Create>
  );
};
