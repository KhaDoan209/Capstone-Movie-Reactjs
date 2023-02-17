import React, { useState } from 'react';
import {
   Button,
   Cascader,
   DatePicker,
   Form,
   Input,
   InputNumber,
   Radio,
   Select,
   Switch,
   TreeSelect,
   Upload,
} from 'antd';
const CreateFilm = () => {
   return (
      <div className='container mt-4'>
         <h1 className='title mb-5'>Thêm Phim Mới</h1>
         <div className='row'>
            <div className='col-8'>
               {' '}
               <Form
                  labelCol={{ span: 4 }}
                  layout='horizontal'
                  style={{ maxWidth: '100%' }}
               >
                  <Form.Item label='Tên phim'>
                     <Input name='tenPhim' />
                  </Form.Item>
                  <Form.Item label='Trailer'>
                     <Input name='trailer' />
                  </Form.Item>
                  <Form.Item label='Mô tả'>
                     <Input name='moTa' />
                  </Form.Item>
                  <Form.Item label='Ngày khởi chiếu'>
                     <DatePicker />
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

                  <Form.Item label='Button'>
                     <Button>Button</Button>
                  </Form.Item>
               </Form>
            </div>
         </div>
      </div>
   );
};

export default CreateFilm;
