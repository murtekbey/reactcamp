import React from "react";
import { Button, Menu } from "semantic-ui-react";

export default function SignedOut() {
  return (
    <div>
        <Menu.Item>
            <Button >Giriş yap</Button>
            <Button style={{marginLeft: "0.5em"}}>Kayıt ol</Button>
        </Menu.Item>
    </div>
  );
}
