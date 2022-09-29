import React from "react";

import { Table as NeetoUITable } from "neetoui";

import { CONTACTS_LIST } from "../constants";
import { buildContactsTableColumnData } from "../utils";

const Table = ({ setShowDeleteAlert, setSelectedContact }) => (
  <NeetoUITable
    allowRowClick
    pagination
    rowSelection
    currentPageNumber={1}
    defaultPageSize={5}
    handlePageChange={() => {}}
    rowData={CONTACTS_LIST}
    columnData={buildContactsTableColumnData(
      setShowDeleteAlert,
      setSelectedContact
    )}
    onRowClick={() => {}}
    onRowSelect={() => {}}
  />
);

export default Table;
