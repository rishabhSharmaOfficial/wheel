import React from "react";

import { MenuVertical, Clock } from "neetoicons";
import { Typography, Tag, Avatar, Dropdown, Tooltip } from "neetoui";

import { getDayAndTime, getTimePassedSinceCreation } from "./utils";

const { Menu, MenuItem } = Dropdown;

const Note = ({ note, setSelectedNoteId, setShowDeleteAlert }) => (
  <div className="neeto-ui-border-gray-300 mb-4 w-full border p-4 shadow-md">
    <div className="flex justify-between align-middle">
      <Typography style="h4">{note.title}</Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <Menu>
          <MenuItem.Button>Edit</MenuItem.Button>
          <MenuItem.Button
            style="danger"
            onClick={() => {
              setSelectedNoteId(note.id);
              setShowDeleteAlert(true);
            }}
          >
            Delete
          </MenuItem.Button>
        </Menu>
      </Dropdown>
    </div>
    <div className="mb-2">
      <Typography className="neeto-ui-text-gray-600" style="body2">
        {note.description}
      </Typography>
    </div>
    <hr />
    <div className=" mt-3 flex justify-between align-middle">
      <Tag label="Getting Started" style="secondary" type="solid" />
      <div className="flex items-center space-x-2">
        <Clock size={18} />
        <Tooltip content={getDayAndTime(note.created_at)} position="bottom">
          <Typography style="body3">
            {`Created ${getTimePassedSinceCreation(note.created_at)}`}
          </Typography>
        </Tooltip>
        <Avatar
          size="small"
          user={{
            name: "Oliver Smith",
          }}
        />
      </div>
    </div>
  </div>
);

export default Note;
