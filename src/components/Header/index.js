import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { Tag } from "../Tag";

const Item = ({ item }) => {
  switch (item.__typename) {
    case "ContentfulTextSnippet":
      return <span>{renderRichText(item.text)}</span>;
    default:
      return <Tag {...item} />;
  }
};

export const Header = ({ menu }) => {
  console.log(">>>", menu);
  return (
    <Wrapper>
      <ItemsContainerLeft>
        {menu.leftItems.map((item) => (
          <Item item={item} />
        ))}
      </ItemsContainerLeft>
      <ItemsContainerRight>
        {menu.rightItems.map((item) => (
          <Item item={item} />
        ))}
      </ItemsContainerRight>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  background-color: ${(props) => props.theme.headerBgColor};
  
  p {
    color: ${(props) => props.theme.textColor}!important;
    margin: 0;

    a {
    color: ${props => props.theme.textColor};
    text-decoration: none;
  }

  }

  @media (min-width: 320px) {
    font-size: 7.5vw;
    line-height: 1.3;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 12px 12px;
  }

  @media (min-width: 640px) {
    position: sticky;
    top: 0;
    z-index: 10;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 12px;
    font-size: 2vw;
  }
`;

const ItemsContainerLeft = styled.nav`
  display: flex;

  & > * {
    margin-right: 10px;
  }

  @media (min-width: 320px) {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    & > * {
    margin-bottom: 12px;
    }
  }

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & > * {
    margin-bottom: 0px !important;    }
  }

`;

const ItemsContainerRight = styled.nav`
  display: flex;
  align-items: center;


  @media (min-width: 320px) {
    & > * {
    margin-right: 10px;
    }
  }

  @media (min-width: 640px) {
    & > * {
    margin-left: 10px;
    }
  }

`;
