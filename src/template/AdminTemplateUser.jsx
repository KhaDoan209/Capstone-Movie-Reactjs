import React, { Fragment, useState } from 'react'
import { NavLink, Route } from 'react-router-dom'
import { Col, Row } from 'antd';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { userMovie } from '../utils/setting';
import { history } from '../App';
import { DANG_XUAT } from '../redux/types/quanLyNguoiDungType';
const { Header, Sider, Content } = Layout;

export default function AdminTemplateUser(props) {
  const { useLogin } = useSelector(state => state.quanLyNguoiDungReducer)
  const [collapsed, setCollapsed] = useState(false);
  let dispatch = useDispatch()
  if (!localStorage.getItem(userMovie)){
    alert('Bạn chưa đăng nhập')
    history.push('/login')
  }
  if (useLogin.maLoaiNguoiDung !== "QuanTri") {
    alert('Bạn không có quyền truy cập vào trang này')
    history.push('/')
  }
const renderLogin = () => {
    if (useLogin !== null) {
      return <div style={{ position: 'absolute', right: "1%",top:"0%" , color:"white"}}>
        <button>
          <div className='icon1 ml-5  mr-1 rounded-full bg-white-200'>
            {(useLogin != null) ? useLogin.taiKhoan : ""}
          </div>
        </button>
        <button onClick={() => {
          let action = {
            type: DANG_XUAT,
            usLogin: null
          }
          dispatch(action)

        }}>Đăng xuất </button>
      </div>
    }
  }
  return (
    <Route path={props.path} render={(propsRoute) => {
      return <>

        <Layout>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="div">
              <img src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png" alt="..." />
            </div>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined />} >
                <NavLink to="/admin/user">User</NavLink>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header style={{ position: 'relative' }} >
              {/* {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: () => setCollapsed(!collapsed),
                            })} */}
              {collapsed ? <MenuUnfoldOutlined style={{ color: "white" }} onClick={() => {
                setCollapsed(!collapsed)
              }} /> : <MenuFoldOutlined style={{ color: "white" }} onClick={() => {
                setCollapsed(!collapsed)
              }} />}
              {renderLogin()}
            </Header>
            <Content
              style={{

                minHeight: '100vh',

              }}
            >
              <Row>
                <Col span={24}>
                  <props.component {...propsRoute} />
                </Col>
              </Row>
            </Content>
          </Layout>
        </Layout>

      </>
    }} />
  )
}
