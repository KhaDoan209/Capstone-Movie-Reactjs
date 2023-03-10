import React, { useEffect } from 'react';
import { Input } from 'antd';
import { Button, Space, Table } from 'antd';
import {
   getFilmListAction,
   xoaPhimAction,
} from '../../../redux/action/filmAction';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { history } from '../../../App';
const { Search } = Input;

const AdminFilm = (props) => {
   const dispatch = useDispatch();
   const film = useSelector((state) => state.filmReducer.filmList);

   const columns = [
      {
         title: 'Mã Phim',
         dataIndex: 'maPhim',
         key: 'maPhim',
         sortDirection: ['descend', 'ascend'],
         align: 'center',
         className: 'col-1',
         value: (text) => <a>{text}</a>,
         sorter: (a, b) => a.maPhim - b.maPhim,
      },
      {
         title: 'Hình Ảnh',
         dataIndex: 'hinhAnh',
         align: 'center',
         className: 'col-2',
         render: (text) => (
            <img
               key={text}
               className='mx-auto'
               style={{ width: '100px' }}
               src={text}
            />
         ),
      },
      {
         title: 'Tên Phim',
         dataIndex: 'tenPhim',
         key: 'tenPhim',
         sortDirection: ['descend', 'ascend'],
         sorter: (a, b) => {
            let tenPhimA = a.tenPhim.toLowerCase().trim();
            let tenPhimB = b.tenPhim.toLowerCase().trim();
            if (tenPhimA > tenPhimB) {
               return 1;
            }
            return -1;
         },
         className: 'col-2',
      },
      {
         title: 'Mô tả',
         dataIndex: 'moTa',
         key: 'moTa',
         sortDirection: ['descend', 'ascend'],
         className: 'col-4',
         sorter: (a, b) => {
            let moTaA = a.moTa.toLowerCase().trim();
            let moTaB = b.moTa.toLowerCase().trim();
            if (moTaA > moTaB) {
               return 1;
            }
            return -1;
         },
         render: (_, film) => {
            return (
               <p key={film.moTa}>
                  {film.moTa.length > 50
                     ? film.moTa.substr(0, 50) + '...'
                     : film.moTa}
               </p>
            );
         },
      },
      {
         title: 'Thao tác',
         dataIndex: 'maPhim',
         className: 'col-3',
         align: 'center',
         render: (text, film) => {
            return (
               <>
                  <NavLink
                     to={`/admin-film/edit-film/${film.maPhim}`}
                     className='btn btn-primary mr-2'
                     key={1}
                  >
                     Sửa
                  </NavLink>
                  <span
                     onClick={() => {
                        if (
                           window.confirm(
                              'Bạn có chắc muốn xóa phim ' + film.tenPhim
                           ) == true
                        ) {
                           dispatch(xoaPhimAction(film.maPhim));
                        }
                     }}
                     className='btn btn-danger'
                     key={2}
                  >
                     Xóa
                  </span>
               </>
            );
         },
      },
   ];
   useEffect(() => {
      dispatch(getFilmListAction());
   }, []);

   const data = film;
   const onSearch = (value) => {
      dispatch(getFilmListAction(value));
   };
   return (
      <div className='w-90 mt-4'>
         <h1 className='title'>Quản Lý Phim</h1>
         <Button
            className='mt-3'
            onClick={() => {
               history.push('/admin-film/create-film');
            }}
         >
            Thêm Phim
         </Button>
         <Search
            className='mt-4'
            placeholder='input search text'
            onSearch={onSearch}
            enterButton
         />

         <Table
            rowKey={'maPhim'}
            className='mt-4'
            columns={columns}
            dataSource={data}
         />
      </div>
   );
};

export default AdminFilm;
