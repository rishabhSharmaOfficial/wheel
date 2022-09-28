import React from "react";

import { Table as NeetoTable } from "neetoui";

import { CONTACTS_LIST } from "../constants";
import { getContactsTableColumnData } from "../utils";

const Table = ({ setShowDeleteAlert, setSelectedContact }) => (
  <NeetoTable
    allowRowClick
    pagination
    rowSelection
    currentPageNumber={1}
    defaultPageSize={5}
    handlePageChange={() => {}}
    rowData={CONTACTS_LIST}
    columnData={getContactsTableColumnData(
      setShowDeleteAlert,
      setSelectedContact
    )}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);

export default Table;
