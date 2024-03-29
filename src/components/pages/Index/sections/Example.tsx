import React from "react";

import { IconAddGroup } from "~/components/core/Icons";
import { Button } from "~/components/core/Button";

import { useLayout } from "~/hooks/useLayout";

import { useController } from "~/hooks/useController";
import { R_ScrollBar } from "~/components/RADIX/R_ScrollBar";

import { useTranslation } from "next-i18next";

export const Example = () => {

  const {t} = useTranslation("common")

  const { useGetExample, usePostExample } = useController();

  const { toggleDialog } = useLayout();

  const { data: queryData } = useGetExample("2");
  const { mutate, data: postData } = usePostExample();

  const handlePost = () => {
    mutate({ id: "12345" }); // Data from the state to post
  };

  return (
    <div>
      <Button
        text={t("buttons.add-friend")}
        variant="default"
        handleClick={() => toggleDialog("example")}
      />

      {queryData?.example && queryData.example.message}
      <br />
      <Button
        text="Post example"
        size="sm"
        variant="default"
        handleClick={() => handlePost()}
      />
      {postData?.message && postData.message}

      <div className="mt-2 flex flex-col gap-2">
        <Button variant="icon-only" size="lg" icon={<IconAddGroup />} />
        <Button
          variant="icon-with-text"
          size="xs"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
          
        />
        <Button
          variant="icon-with-text"
          size="sm"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-with-text"
          size="md"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-with-text"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
          color="success"
        />
        <Button
          variant="icon-round-filled"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
        <Button
          variant="icon-round-filled"
          size="lg"
          icon={<IconAddGroup />}
          text={t("buttons.add-friend")}
        />
      </div>
    </div>
  );
};
