import React from "react";
import { Palette, LoadingContainer } from "./Styled";

export default class Loading extends React.Component {
  render() {
    return (
      <div>
        <LoadingContainer>
          <div>
            <img src={require("../../resources/Loading.gif")} />
          </div>
        </LoadingContainer>
      </div>
    );
  }
}
