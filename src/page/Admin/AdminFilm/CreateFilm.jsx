import React, { useState } from 'react';
import {
   Button,
   DatePicker,
   Form,
   Input,
   InputNumber,
   Switch,
   Upload,
} from 'antd';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { themPhimUploadHinhAction } from '../../../redux/action/filmAction';

const CreateFilm = () => {
   const [imgSrc, setImgSrc] = useState(null);
   const dispatch = useDispatch();
   const formik = useFormik({
      initialValues: {
         tenPhim: '',
         trailer: '',
         moTa: '',
         ngayKhoiChieu: '',
         dangChieu: '',
         sapChieu: '',
         hot: '',
         danhGia: 0,
         hinhAnh: {},
      },
      onSubmit: (values) => {
         let newPhim = new FormData();
         for (const key in values) {
            if (key !== 'hinhAnh') {
               newPhim.append(key, values[key]);
            } else {
               newPhim.append('File', values.hinhAnh, values.hinhAnh.name);
            }
         }
         dispatch(themPhimUploadHinhAction(newPhim));
      },
   });

   const handleDatePicker = (value) => {
      let ngayKhoiChieu = value.format('DD/MM/YYYY');
      formik.setFieldValue('ngayKhoiChieu', ngayKhoiChieu);
   };

   const handleOnSwitch = (name) => {
      return (value) => {
         formik.setFieldValue(name, value);
      };
   };
   const handleChangeFile = (e) => {
      let file = e.target.files[0];
      if (
         file.type === 'image/jpeg' ||
         file.type === 'image/jpg' ||
         file.type === 'image/png'
      ) {
         let reader = new FileReader();
         reader.readAsDataURL(file);
         reader.onload = (event) => setImgSrc(event.target.result);
         formik.setFieldValue('hinhAnh', file);
      }
   };
   return (
      <div className='container mt-4'>
         <h1 className='title mb-5'>Thêm Phim Mới</h1>
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
                     />
                  </Form.Item>
                  <Form.Item label='Trailer'>
                     <Input
                        name='trailer'
                        onChange={formik.handleChange}
                     />
                  </Form.Item>
                  <Form.Item label='Mô tả'>
                     <Input
                        name='moTa'
                        onChange={formik.handleChange}
                     />
                  </Form.Item>
                  <Form.Item label='Ngày khởi chiếu'>
                     <DatePicker
                        format={'DD/MM/YYYY'}
                        onChange={handleDatePicker}
                     />
                  </Form.Item>
                  <Form.Item
                     label='Đang chiếu'
                     valuePropName='checked'
                  >
                     <Switch
                        name='dangChieu'
                        onChange={handleOnSwitch('dangChieu')}
                     />
                  </Form.Item>
                  <Form.Item
                     label='Sắp chiếu'
                     valuePropName='checked'
                  >
                     <Switch
                        name='sapChieu'
                        onChange={handleOnSwitch('sapChieu')}
                     />
                  </Form.Item>
                  <Form.Item label='Số sao'>
                     <InputNumber
                        min={1}
                        max={10}
                        onChange={(value) => {
                           formik.setFieldValue('danhGia', value);
                        }}
                     />
                  </Form.Item>
                  <Form.Item
                     label='Hot'
                     valuePropName='checked'
                  >
                     <Switch
                        name='hot'
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
                        src={imgSrc}
                        width={100}
                        height={150}
                        alt='...'
                     />
                  </Form.Item>
                  <Form.Item label='Thêm phim'>
                     <Button
                        onClick={() => {
                           console.log('Thêm');
                        }}
                        htmlType='submit'
                     >
                        Thêm
                     </Button>
                  </Form.Item>
               </Form>
            </div>
         </div>
      </div>
   );
};

export default CreateFilm;
