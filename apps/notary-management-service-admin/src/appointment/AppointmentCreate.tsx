import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { NotaryTitle } from "../notary/NotaryTitle";
import { NotaryServicePerformedTitle } from "../notaryServicePerformed/NotaryServicePerformedTitle";

export const AppointmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Client" source="client" />
        <DateTimeInput label="Date" source="date" />
        <NumberInput step={1} label="Duration" source="duration" />
        <TextInput label="Location" source="location" />
        <ReferenceInput source="notary.id" reference="Notary" label="Notary">
          <SelectInput optionText={NotaryTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="notaryServicePerformeds"
          reference="NotaryServicePerformed"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={NotaryServicePerformedTitle} />
        </ReferenceArrayInput>
        <TextInput label="Notes" multiline source="notes" />
        <SelectInput
          source="status"
          label="Status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="Time" source="time" />
      </SimpleForm>
    </Create>
  );
};
