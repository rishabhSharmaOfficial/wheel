import React, { useState } from "react";

import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";

import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import NewContactPane from "./Pane/Create";
import Table from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenuBar, setShowMenuBar] = useState(true);
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [selectedContact, setSelectedContact] = useState("");
  const [showCreateContactPane, setShowCreateContactPane] = useState(false);

  return (
    <>
      <Menu showMenu={showMenuBar} />
      <Container>
        <Header
          menuBarToggle={() => setShowMenuBar(show => !show)}
          title="All Contacts"
          actionBlock={
            <Button
              icon="ri-add-line"
              label="Add Contact"
              onClick={() => setShowCreateContactPane(open => !open)}
            />
          }
          searchProps={{
            placeholder: "Search Name, Email, Phone Number, Etc.",
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Table
          setSelectedContact={setSelectedContact}
          setShowDeleteAlert={setShowDeleteAlert}
        />
        <NewContactPane
          setShowCreateContactPane={setShowCreateContactPane}
          showCreateContactPane={showCreateContactPane}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedContact={selectedContact}
            onClose={() => setShowDeleteAlert(false)}
          />
        )}
      </Container>
    </>
  );
};

export default Contacts;
