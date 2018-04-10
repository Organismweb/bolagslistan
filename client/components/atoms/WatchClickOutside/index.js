// @flow
import * as React from 'react';

type Props = {
  children?: React.Node,
  onClickOutside: () => void,
};

class WatchClickOutside extends React.Component<Props> {
  componentWillMount() {
    window.addEventListener('click', this.handleClick);
  }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick);
  }
  // A flow type ref to the container element.
  container: ?HTMLSpanElement;

  handleClick = (event: Event) => {
    const { onClickOutside } = this.props;
    const { target } = event;
    const { container } = this;
    // Ensure that the callback added to the onClickOutside prop is a function.
    if (typeof onClickOutside === 'function') {
      // Ensure that container is a span element and target is a node.
      if (container instanceof HTMLSpanElement && target instanceof Node) {
        // if target is container - container was not clicked outside
        // if container contains clicked target - click was not outside of it
        if (target !== container && !container.contains(target)) {
          onClickOutside(); // clicked outside - fire the provided callback function.
        }
      }
    }
  };
  render() {
    return (
      <span
        ref={(container: ?HTMLSpanElement) => {
          this.container = container;
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

export default WatchClickOutside;
