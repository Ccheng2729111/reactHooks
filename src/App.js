import React, { Component } from 'react';
import { Tabs } from 'antd';
import CountHoos from './CountHoos'

const { TabPane } = Tabs;
class App extends Component {
  render() {
    return (
      <div>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key="1">
            <CountHoos />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
    </TabPane>
          <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
    </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default App;