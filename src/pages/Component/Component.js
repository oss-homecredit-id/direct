import React from "react";
import { Button } from "../../lib/Button/Button";
import { Input } from "../../lib/Input/Input";
import close from "../../assets/icon-close.png";
import gumball from "../../assets/gumball.png";

const Component = () => {
  const styles = {
    container: {
      background: "white",
      padding: "30px",
    },
  };

  return (
    <div style={styles.container}>
      <div className="componentHeader">ini headernya</div>
      <div>ini isi contoh componentnya</div>
      <Button filled>helloooo</Button>
      <Input icon src={close}>
        NAME
      </Input>
      <Input>PHONE NUMBER</Input>
      <Input icon src={gumball}>
        USERNAME
      </Input>
    </div>
  );
};

export default Component;
