import React from "react";
import { Dropdown, Menu } from "antd";
import { SettingFilled } from "@ant-design/icons";

export default function Settings({ logout }) {
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item onClick={logout}>로그아웃</Menu.Item>
        </Menu>
      }
      trigger={["click"]}
      placement="bottomRight"
    >
      <Button shape='circle' icon={<SettingFilled />}>
    </Dropdown>
  );
}
