import React from "react";
import { Palette, CommunityPageContainer } from "./Styled";
import CommunityPageTabs from "./CommunityPageTabs";
export default class CommunityPage extends React.Component {
  render() {
    return (
      <CommunityPageContainer>
        <CommunityPageTabs />
      </CommunityPageContainer>
    );
  }
}
