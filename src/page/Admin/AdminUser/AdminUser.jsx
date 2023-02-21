import React, { Fragment, useEffect } from 'react'
import { Button, Table } from 'antd';

import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { layDanhsachuser, timKiemnguoidung, xoaUser } from '../../../redux/action/quanLyNguoiDungaction';
import { useDispatch, useSelector } from 'react-redux';
import { object } from 'yup';
import { NavLink } from 'react-router-dom';

const { Search } = Input;



export default function AdminUser() {
  let dispatch = useDispatch()
  let { arrayUser } = useSelector(state => state.quanLyNguoiDungReducer)

  useEffect(() => {

    let action = layDanhsachuser()
    dispatch(action)

  }, [])
  const onSearch = (value) => {
    console.log(value)
    let action = timKiemnguoidung(value)
    dispatch(action)
  };
  const columns = [

    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      value: (text, object) => { return <span>{text}</span> },
      sorter: (a, b) => a.taiKhoan - b.taiKhoan,
      sortDirections: ['descend'],
      width: '10%'
    },
    {
      title: 'Mật Khẩu',
      dataIndex: 'matKhau',
      value: (text, object) => { return <span>{text}</span> },
      sorter: (a, b) => a.matKhau - b.matKhau,
      sortDirections: ['descend'],
      width: '10%'
    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      value: (text, object) => { return <span>{text}</span> },
      sorter: (a, b) => a.hoTen - b.hoTen,
      sortDirections: ['descend'],
      width: '20%'
    },
    {
      title: 'email',
      dataIndex: 'email',
      value: (text, object) => { return <span>{text}</span> },
      sorter: (a, b) => a.email - b.email,
      sortDirections: ['descend'],
      width: '20%'
    },
    {
      title: 'số điện thoại',
      dataIndex: 'soDT',
      value: (text, object) => { return <span>{text}</span> },
      sorter: (a, b) => a.soDT - b.soDT,
      sortDirections: ['descend'],
      width: "20%"
    },
    {
      title: 'Thao tác',
      dataIndex: 'hanhDong',
      render: (text, object) => {
        return <Fragment>
          <NavLink className="bg-dark text-white mr-2" to={`/admin/edituser/${object.taiKhoan}`} >Sửa</NavLink>
          <span className='delete' key={2} onClick={() => {
            if (window.confirm(`Bạn có chắc xóa người dùng` + object.taiKhoan)) {
              let action = xoaUser(object.taiKhoan)
              dispatch(action)
            }
          }}>X</span>
        </Fragment>
      },
      sorter: (a, b) => a.soDT - b.soDT,
      sortDirections: ['descend'],
      width: "20%"

    },

  ];
  const data = arrayUser;

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );


  return (
    <div className="container">
      <NavLink to="/admin/user/adduser" className="btn btn-info mt-1 mb-1" >  Thêm người dùng</NavLink>
      <Search
        placeholder="Tìm kiếm người dùng"
        enterButton="Search"
        size="large"
        suffix={suffix}
        onSearch={onSearch}
      />
      <h3 className=' text-center'  style={{fontSize:"30px",marginBottom:"10px"}}>Quản Lý Người Dùng </h3>
      <Table columns={columns} dataSource={data} onChange={onChange} rowKey={"taiKhoan"} />
    </div>
  )
}
