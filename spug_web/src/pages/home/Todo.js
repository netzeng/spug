/**
 * Copyright (c) OpenSpug Organization. https://github.com/openspug/spug
 * Copyright (c) <spug.dev@gmail.com>
 * Released under the AGPL-3.0 License.
 */
import React from 'react';
import { Button, Card, List } from 'antd';

function TodoIndex(props) {
  return (
    <Card title="待办事项" bodyStyle={{height: 234, padding: '0 24px'}}>
      <List>
        <List.Item extra={<Button type="link">已完成</Button>}>发布申请 测试未附件 需要你审核。</List.Item>
        <List.Item>工单 资源添加 需要你审核。</List.Item>
      </List>
    </Card>
  )
}

export default TodoIndex