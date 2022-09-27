import React, { useState } from "react";

import { Formik, Form as FormikForm } from "formik";
import { Button, Pane } from "neetoui";
import { Input, Textarea, Select } from "neetoui/formik";

import notesApi from "apis/notes";

import { NOTES_FORM_VALIDATION_SCHEMA, ASSIGNEES, TAGS } from "../constants";

const Form = ({ onClose, refetch, note, isEdit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async values => {
    try {
      if (isEdit) {
        await notesApi.update(note.id, values);
      } else {
        await notesApi.create(values);
      }
      refetch();
      onClose();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <Formik
      initialValues={note}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={NOTES_FORM_VALIDATION_SCHEMA}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormikForm className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              required
              className="w-full flex-grow-0"
              label="Title"
              name="title"
              placeholder="Enter note title"
            />
            <Textarea
              required
              className="w-full flex-grow-0"
              label="Description"
              name="description"
              placeholder="Enter note description"
              rows={2}
            />
            <Select
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Assigned Contact"
              name="assignee"
              options={ASSIGNEES}
              placeholder="Select Role"
            />
            <Select
              isMulti
              isSearchable
              required
              className="w-full flex-grow-0"
              label="Tags"
              name="tags"
              options={TAGS}
              placeholder="Select Tags"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              className="mr-3"
              disabled={isSubmitting}
              label={isEdit ? "Update" : "Save changes"}
              loading={isSubmitting}
              style="primary"
              type="submit"
              onClick={() => setSubmitted(true)}
            />
            <Button label="Cancel" style="text" onClick={onClose} />
          </Pane.Footer>
        </FormikForm>
      )}
    </Formik>
  );
};

export default Form;
