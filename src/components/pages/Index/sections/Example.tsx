import React from "react";

import { IconAddGroup } from "~/components/core/Icons";
import { Button } from "~/components/core/Button";

import { useDialogs } from "~/hooks/useDialogs";

import { useController } from "~/hooks/useController";

export const Example = () => {
  const { useGetExample, usePostExample } = useController();

  const { openDialog } = useDialogs();

  const { data: queryData } = useGetExample("2");
  const { mutate, data: postData } = usePostExample();

  const handlePost = () => {
    mutate({ id: "12345" }); // Data from the state to post
  };

  return (
    <div>
      <Button
        text="OpenDialog"
        variant="default"
        handleClick={() => openDialog("example")}
      />

      {queryData?.example && queryData.example.message}
      <br />
      <Button
        text="Post example"
        buttonSize="sm"
        variant="default"
        handleClick={() => handlePost()}
      />
      {postData?.message && postData.message}

      <div className="flex flex-col gap-2 mt-2">
        <Button variant="icon-only" buttonSize="lg" icon={<IconAddGroup />} />
        <Button variant="icon-with-text" buttonSize="xs"  icon={<IconAddGroup/>} text="Add Friend" />
        <Button variant="icon-with-text"  buttonSize="sm" icon={<IconAddGroup/>} text="Add Friend" />
        <Button variant="icon-with-text"  buttonSize="md" icon={<IconAddGroup/>} text="Add Friend" />
        <Button variant="icon-with-text"  buttonSize="lg" icon={<IconAddGroup/>} text="Add Friend" />
        <Button variant="icon-round-filled"  icon={<IconAddGroup/>} text="Add Friend" />
        <Button variant="icon-round-filled"  icon={<IconAddGroup/>} text="Add Friend" />
        <Button variant="icon-round-filled"  icon={<IconAddGroup/>} text="Add Friend" />
        <Button variant="icon-round-filled"  buttonSize="lg"  icon={<IconAddGroup/>} text="Add Friend" />
      </div>
    </div>
  );
};
