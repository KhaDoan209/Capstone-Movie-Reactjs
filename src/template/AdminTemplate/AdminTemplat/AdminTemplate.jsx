import React, { useState } from 'react'

import { Route } from 'react-router-dom'
import { Col, Row } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Header, Sider, Content } = Layout;

export default function AdminTemplate(props) {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Route path={props.path} render={(propsRoute) => {
            return <>
                <Row>
                    <Col span={30}>
                        <props.component {...propsRoute} />
                    </Col>
                </Row>
                <Layout>
                    <Sider trigger={null} collapsible collapsed={collapsed}>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            items={[
                                {
                                    key: '1',
                                    icon: <UserOutlined />,
                                    label: 'nav 1',
                                   
                                },
                                {
                                    key: '2',
                                    icon: <VideoCameraOutlined />,
                                    label: 'nav 2',
                                },
                                {
                                    key: '3',
                                    icon: <UploadOutlined />,
                                    label: 'nav 3',
                                },
                            ]}
                        />
                    </Sider>
                    <Layout className="site-layout">
                        <Header >
                            {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })} */}
                            {collapsed ? <MenuUnfoldOutlined  style={{color:"white"}} onClick={() => {
                                setCollapsed(!collapsed)
                            }} /> : <MenuFoldOutlined  style={{color:"white"}} onClick={() => {
                                setCollapsed(!collapsed)
                            }} />}
                        </Header>
                        <Content
                            style={{
                               
                                minHeight: '100vh',
                                
                            }}
                        >
                            
                        </Content>
                    </Layout>
                </Layout>

            </>
        }} />
    )
}
