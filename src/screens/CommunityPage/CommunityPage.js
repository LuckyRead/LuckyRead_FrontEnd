import React from "react";
import { CommunityPageContainer, TitleContainer } from "./Styled";
import CommunityPageTabs from "./CommunityPageTabs";
export default class CommunityPage extends React.Component {
  render() {
    return (
      <CommunityPageContainer>
        <TitleContainer>Comunidad</TitleContainer>
        <CommunityPageTabs />
      </CommunityPageContainer>
    );
  }
}
