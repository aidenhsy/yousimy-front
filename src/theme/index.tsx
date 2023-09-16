import React from 'react';
import { ConfigProvider } from 'antd';

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider theme={{}}>
      <ConfigProvider
        theme={{
          token: {},
        }}
      >
        {node}
      </ConfigProvider>
    </ConfigProvider>
  </>
);

export default withTheme;
