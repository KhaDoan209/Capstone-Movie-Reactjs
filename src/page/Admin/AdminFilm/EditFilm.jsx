import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Switch } from 'antd';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import {
   capNhatPhimUpload,
   layThongTinPhimTheoMaPhim,
} from '../../../redux/action/filmAction';
import { useEffect } from 'react';
import moment from 'moment';
const EditFilm = (props) => {
   let chiTietFilm = useSelector((state) => state.filmReducer.thongTinFilm);
   const [imgSrc, setImgSrc] = useState('');
   const dispatch = useDispatch();
   const formik = useFormik({
      enableReinitialize: true,
      initialValues: {
         maPhim: chiTietFilm.maPhim,
         tenPhim: chiTietFilm.tenPhim,
         trailer: chiTietFilm.trailer,
         moTa: chiTietFilm.moTa,
         ngayKhoiChieu: chiTietFilm.ngayKhoiChieu,
         dangChieu: chiTietFilm.dangChieu,
         sapChieu: chiTietFilm.sapChieu,
         hot: chiTietFilm.hot,
         danhGia: chiTietFilm.danhGia,
         hinhAnh: null,
      },
      onSubmit: (values) => {
         let newPhim = new FormData();
         for (const key in values) {
            if (key !== 'hinhAnh') {
               newPhim.append(key, values[key]);
            } else {
               if (values.hinhAnh !== null) {
                  newPhim.append('File', values.hinhAnh, values.hinhAnh.name);
               }
            }
         }
         dispatch(capNhatPhimUpload(newPhim));
      },
   });
   useEffect(() => {
      let { id } = props.match.params;
      dispatch(layThongTinPhimTheoMaPhim(id));
   }, []);

   const handleDatePicker = (value) => {
      let ngayKhoiChieu = value;
      formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
   };
   const handleOnSwitch = (name) => {
      return (value) => {
         formik.setFieldValue(name, value);
      };
   };
   const handleChangeFile = async (e) => {
      let file = e.target.files[0];
      if (
         file.type === 'image/jpeg' ||
         file.type === 'image/jpg' ||
         file.type === 'image/png'
      ) {
         await formik.setFieldValue('hinhAnh', file);
         let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = (event) => setImgSrc(event.target.result);
      }
   };
   return (
      <div className='container mt-4'>
         <h1 className='title mb-5'>Sửa Thông Tin Phim</h1>
         <div className='row'>
            <div className='col-8'>
               <Form
                  onSubmitCapture={formik.handleSubmit}
                  labelCol={{ span: 4 }}
                  layout='horizontal'
                  style={{ maxWidth: '100%' }}
               >
                  <Form.Item label='Tên phim'>
                     <Input
                        name='tenPhim'
                        onChange={formik.handleChange}
                        value={formik.values.tenPhim}
                     />
                  </Form.Item>
                  <Form.Item label='Trailer'>
                     <Input
                        name='trailer'
                        onChange={formik.handleChange}
                        value={formik.values.trailer}
                     />
                  </Form.Item>
                  <Form.Item label='Mô tả'>
                     <Input
                        name='moTa'
                        onChange={formik.handleChange}
                        value={formik.values.moTa}
                     />
                  </Form.Item>
                  <Form.Item label='Ngày khởi chiếu'>
                     <DatePicker
                        format={'DD/MM/YYYY'}
                        onChange={handleDatePicker}
                        value={moment(formik.values.ngayKhoiChieu)}
                     />
                  </Form.Item>
                  <Form.Item
                     label='Đang chiếu'
                     valuePropName='checked'
                  >
                     <Switch
                        name='dangChieu'
                        onChange={handleOnSwitch('dangChieu')}
                        checked={formik.values.dangChieu}
                     />
                  </Form.Item>
                  <Form.Item
                     label='Sắp chiếu'
                     valuePropName='checked'
                  >
                     <Switch
                        name='sapChieu'
                        onChange={handleOnSwitch('sapChieu')}
                        checked={formik.values.sapChieu}
                     />
                  </Form.Item>
                  <Form.Item label='Số sao'>
                     <InputNumber
                        min={1}
                        max={10}
                        onChange={(value) => {
                           formik.setFieldValue('danhGia', value);
                        }}
                        value={formik.values.danhGia}
                     />
                  </Form.Item>
                  <Form.Item
                     label='Hot'
                     valuePropName='checked'
                  >
                     <Switch
                        name='hot'
                        checked={formik.values.hot}
                        onChange={handleOnSwitch('hot')}
                     />
                  </Form.Item>
                  <Form.Item
                     label='Upload Ảnh'
                     valuePropName='fileList'
                  >
                     <input
                        type='file'
                        onChange={handleChangeFile}
                     />
                     <img
                        accept='image/png,image/jpg,image/jpeg'
                        className='mt-4'
                        src={imgSrc === '' ? chiTietFilm.hinhAnh : imgSrc}
                        width={100}
                        height={150}
                        alt='...'
                     />
                  </Form.Item>
                  <Form.Item label='Thêm phim'>
                     <Button
                        onClick={formik.handleSubmit}
                        htmlType='submit'
                     >
                        Sửa
                     </Button>
                  </Form.Item>
               </Form>
            </div>
         </div>
      </div>
   );
};

export default EditFilm;
