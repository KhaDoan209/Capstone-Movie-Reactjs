import React, { useState } from 'react';
import moment from 'moment';
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
const CreateFilm = () => {
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
         console.log(values);
      },
   });

   const handleDatePicker = (value) => {
      // console.log(moment(value).format('DD/MM/YYYY'));

      console.log(value.format('YYYY-MM-DDTHH:MM:SSZ'));
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
                     <Switch />
                  </Form.Item>
                  <Form.Item
                     label='Sắp chiếu'
                     valuePropName='checked'
                  >
                     <Switch />
                  </Form.Item>
                  <Form.Item label='Số sao'>
                     <InputNumber type='number' />
                  </Form.Item>
                  <Form.Item
                     label='Hot'
                     valuePropName='checked'
                  >
                     <Switch />
                  </Form.Item>
                  <Form.Item
                     label='Upload Ảnh'
                     valuePropName='fileList'
                  >
                     <Upload
                        action='/upload.do'
                        listType='picture-card'
                     >
                        <div>
                           <div>Upload</div>
                        </div>
                     </Upload>
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
