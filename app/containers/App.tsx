import * as React from 'react';

interface AppProps {
  children: any
}

export default class App extends React.Component<AppProps, void> {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
