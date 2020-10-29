import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "./Button.css";

const styles = {
    ButtonStyles: {
        color: "#ffffff"
    }
  }

function Button({text, variant, onClick}) {
    return (
      <AwesomeButton style={styles.ButtonStyles}
        size="large"
        type= {variant||"primary"}
        onPress={onClick}
      >
        {text}
      </AwesomeButton>
    );
    }

    export default Button;