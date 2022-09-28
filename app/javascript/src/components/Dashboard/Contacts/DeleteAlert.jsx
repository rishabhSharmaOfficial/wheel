import React from "react";

import { Alert, Toastr } from "neetoui";

const DeleteAlert = ({ onClose, selectedContact }) => (
  <Alert
    isOpen
    message={`Are you sure you want to continue deleteing "${selectedContact}"? This cannot be undone.`}
    title="Delete Contact"
    onClose={onClose}
    onSubmit={() => {
      Toastr.success("Contact deleted successfully.");
      onClose();
    }}
  />
);

export default DeleteAlert;
