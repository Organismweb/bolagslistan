// @flow
import * as React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';
import { color, spacing, font } from '../../_settings/_variables';

type Props = {
  children: React.Node,
  defaultActiveTabIndex: number,
};

type State = {
  activeTabIndex: number,
};

export class TabList extends React.Component<Props, State> {
  state = {
    activeTabIndex: this.props.defaultActiveTabIndex,
  };
  handleTabClick = (index: number) => {
    this.setState({
      activeTabIndex: index,
    });
  };
  renderTabNavElements = () =>
    React.Children.map(this.props.children, (element, index) =>
      React.cloneElement(element, {
        onClick: this.handleTabClick,
        tabIndex: index,
        isActive: index === this.state.activeTabIndex,
      })
    );
  renderActiveTabContent = () => {
    const { children } = this.props;
    const { activeTabIndex } = this.state;
    // $FlowFixMe
    if (this.props.children[activeTabIndex]) {
      // $FlowFixMe
      return children[activeTabIndex].props.children;
    }
  };
  render() {
    return (
      <TabContainer>
        <TabNav>{this.renderTabNavElements()}</TabNav>
        <TabContent>{this.renderActiveTabContent()}</TabContent>
      </TabContainer>
    );
  }
}

type TabProps = {
  title: string,
  tabIndex?: ?number,
  isActive?: ?boolean,
  onClick?: (arg: ?number) => void,
};

export const Tab = (props: TabProps) => (
  <TabItemContainer>
    {/* $FlowFixMe */}
    <TabButton active={props.isActive} onClick={() => props.onClick(props.tabIndex)}>
      {props.title}
    </TabButton>
  </TabItemContainer>
);

Tab.defaultProps = {
  tabIndex: null,
  isActive: null,
  onClick: () => {},
};

const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1px solid ${color.grey};
`;

const TabNav = styled.ul`
  display: flex;
  background: red;
  padding: 0;
  margin: 0;
  border-bottom: 1px solid ${color.grey};
`;

const TabItemContainer = styled.li`
  display: flex;
  flex: 1;
  list-style: none;
  color: black;
  + li {
    border-left: 1px solid ${color.grey};
  }
`;

const TabButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: ${color.lightGrey};
  font-size: ${font.size.sm};
  color: ${color.darkGrey};
  border: none;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: all 300ms;
  &:hover {
    background-color: ${lighten(0.03, color.lightGrey)};
  }
  ${props =>
    props.active &&
    `
    color: ${color.black};
    background-color: ${color.white};
    box-shadow: 0 2px 4px 0 rgba(31, 46, 61, 0.06);
  `};
`;

const TabContent = styled.div`
  flex: 1;
  padding: ${spacing.lg};
  list-style: none;
`;
