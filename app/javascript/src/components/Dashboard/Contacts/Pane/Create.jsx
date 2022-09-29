import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { CONTACTS_FORM_INITIAL_FORM_VALUES } from "../constants";

const Create = ({ showCreateContactPane, setShowCreateContactPane }) => {
  const onClose = () => setShowCreateContactPane(false);

  return (
    <Pane isOpen={showCreateContactPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a new contact
        </Typography>
      </Pane.Header>
      <Form contact={CONTACTS_FORM_INITIAL_FORM_VALUES} onClose={onClose} />
    </Pane>
  );
};

export default Create;
