import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignee: null,
  tags: [],
};

export const ASSIGNEES = [
  {
    label: "User",
    value: "user",
  },
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Developer",
    value: "developer",
  },
];

export const TAGS = [
  {
    label: "Create",
    value: "create",
  },
  {
    label: "Read",
    value: "read",
  },
  {
    label: "Update",
    value: "update",
  },
  {
    label: "Delete",
    value: "delete",
  },
];

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  assignee: yup
    .object()
    .nullable()
    .shape({
      label: yup.string().oneOf(ASSIGNEES.map(tag => tag.label)),
      value: yup.string().oneOf(ASSIGNEES.map(tag => tag.value)),
    })
    .required("Role is required"),
  tags: yup
    .array(
      yup
        .object()
        .nullable()
        .shape({
          label: yup.string().oneOf(TAGS.map(tag => tag.label)),
          value: yup.string().oneOf(TAGS.map(tag => tag.value)),
        })
    )
    .min(1, "Atleast one tag required"),
});
