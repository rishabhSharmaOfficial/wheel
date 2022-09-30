import { buildSelectOptions } from "utils";
import * as yup from "yup";

export const CONTACTS_FORM_INITIAL_FORM_VALUES = {
  firstName: "",
  lastName: "",
  role: null,
  email: "",
};

export const ROLES = buildSelectOptions(["Designer", "Admin", "Developer"]);

export const CONTACTS_FORM_VALIDATION_SCHEMA = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  role: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ROLES.map(tag => tag.label)),
      value: yup.string().oneOf(ROLES.map(tag => tag.value)),
    })
    .required("Role is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email should have a valid format"),
});

export const CONTACTS_LIST = [
  {
    name: "John Smith",
    email: "john65@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Developer",
    id: 1,
  },
  {
    name: "Ronald Richards",
    email: "ronalrichards@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Admin",
    id: 2,
  },
  {
    name: "Sam Smith",
    email: "samsmith@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Designer",
    id: 3,
  },
  {
    name: "John Smith",
    email: "john65@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Developer",
    id: 4,
  },
  {
    name: "Ronald Richards",
    email: "ronalrichards@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Admin",
    id: 5,
  },
  {
    name: "Sam Smith",
    email: "samsmith@gmail.com",
    createdAt: "Feb 5, 2021",
    role: "Designer",
    id: 6,
  },
];
