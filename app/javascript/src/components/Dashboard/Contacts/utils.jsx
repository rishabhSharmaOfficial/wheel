import React from "react";

import { MenuHorizontal } from "neetoicons";
import { Typography, Avatar, Dropdown } from "neetoui";

const { Menu, MenuItem } = Dropdown;

export const getContactsTableColumnData = (
  setShowDeleteAlert,
  setSelectedContact
) => [
  {
    title: "Name & Role",
    dataIndex: "name",
    key: "name",
    width: "30%",
    render: (name, contact) => (
      <div className="align-items-center flex">
        <Avatar
          size="medium"
          user={{
            name: contact.name,
          }}
        />
        <div className="ml-2">
          <Typography style="h4">{name}</Typography>
          <Typography className="neeto-ui-text-gray-500" style="body2">
            {contact.role}
          </Typography>
        </div>
      </div>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    width: "30%",
  },
  {
    title: "Created At",
    dataIndex: "createdAt",
    key: "createdAt",
    width: "30%",
  },
  {
    title: "",
    dataIndex: "more",
    key: "more",
    width: "10%",
    render: (more, contact) => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <Menu>
          <MenuItem.Button>Edit</MenuItem.Button>
          <MenuItem.Button
            style="danger"
            onClick={() => {
              setShowDeleteAlert(true);
              setSelectedContact(contact.name);
            }}
          >
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    ),
  },
];
