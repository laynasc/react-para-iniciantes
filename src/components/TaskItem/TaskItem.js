import React from "react";

export default function TaskItem({ id, title, taskstage }) {
  return <div>{title}</div>;
}

TaskItem.proptypes = {
  id: proptypes.number.isRequired.isRequired,
  title: proptypes.string.isRequired,
  taskstage: proptypes.string.isRequired
};
