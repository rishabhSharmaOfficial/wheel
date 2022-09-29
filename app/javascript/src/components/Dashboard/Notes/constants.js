import * as yup from "yup";

import { buildSelectOptions } from "utils/index";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  assignee: null,
  tags: [],
};

export const ASSIGNEES = buildSelectOptions(["User", "Admin", "Developer"]);

export const TAGS = buildSelectOptions(["Create", "Read", "Update", "Delete"]);

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
