import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export default function SignedIn() {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://media-exp1.licdn.com/dms/image/C5603AQHSw7R-dvUy6w/profile-displayphoto-shrink_200_200/0/1611869148202?e=1628121600&v=beta&t=Jt-LVDWcjsko1ArukXTk2CsQCDEIhUkvG5yKJaf70Dw"
        />
        <Dropdown pointing="top left" text="Murat Altınpınar">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
            <Dropdown.Item text="Çıkış Yap" icon="sign-out"></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
