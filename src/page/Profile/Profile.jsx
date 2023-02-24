import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { layThongTinNguoiDungAction,capNhatNguoiDungAction } from '../../redux/action/quanLyNguoiDungaction';
import moment from 'moment';
import { useFormik } from 'formik';

const Profile = (props) => {
    const { userLogin } = useSelector(state => state.quanLyNguoiDungReducer);
    const dispatch = useDispatch();

    const formik = useFormik({
        //lưu giá trị lấy từ form
        
        initialValues: {
            taiKhoan: userLogin.taiKhoan,
            matKhau: "",
            email: userLogin.email,
            soDt: userLogin.soDT,
            maNhom: userLogin.maNhom,
            maLoaiNguoiDung: userLogin.maLoaiNguoiDung,
            hoTen: userLogin.hoTen,
        },
        onSubmit: values => {
            console.log("HIHI", values)
            dispatch(capNhatNguoiDungAction(values))
        },
    });

    return (
        <form className='container' onSubmit={formik.handleSubmit}>
            <div className="form-group">
                <label htmlFor="inputName">Họ Tên</label>
                <input type="text" className="form-control" id="inputName" onChange={formik.handleChange} onBlur={formik.handleBlur} name='hoTen' value={formik.values.hoTen} />
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputTK">Tài Khoản</label>
                    <input type="text" className="form-control" id="inputTK" name='taiKhoan' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.taiKhoan} disabled />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPW">Password</label>
                    <input type="password" className="form-control" id="inputPW" name='matKhau' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.matKhau} />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail">Email</label>
                    <input type="text" className="form-control" id="inputEmail" name='email' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputSDT">Số Điện Thoại</label>
                    <input type="text" className="form-control" id="inputSDT" name='soDt' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.soDt} />
                </div>
            </div>


            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputG">Mã Nhóm</label>
                    <input type="text" className="form-control" id="inputG" name='maNhom' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.maNhom} />
                </div>
                <div className="form-group col-md-4">
                    <fieldset disabled>
                        <label htmlFor="disabledSelect">Loại Tài Khoản</label>
                        <select id="disabledSelect" className="form-control">
                            <option value={userLogin.maLoaiNguoiDung} >{userLogin.maLoaiNguoiDung}</option>
                        </select>
                    </fieldset>
                </div>
            </div>

            <button type="submit" className="btn btn-primary">Cập Nhật</button>
        </form>

    );
}

const LSDV = (props) => {
    const dispatch = useDispatch();

    const { userLogin } = useSelector(state => state.quanLyNguoiDungReducer);

    const { thongTinNguoiDung } = useSelector(state => state.quanLyNguoiDungReducer);
    useEffect(() => {
        const action = layThongTinNguoiDungAction()
        dispatch(action)
    }, []);
    console.log({ thongTinNguoiDung });

    const renderTicketItem = () => {
        return thongTinNguoiDung.thongTinDatVe?.map((ticket, i) => {
            return <div className="col-xl-3 col-sm-6 mb-5 shadow-lg" key={i}>
                <div className="bg-white rounded py-5 px-4"><img src={ticket.hinhAnh} alt="123" className="img-fluid mb-3 img-thumbnail shadow-sm" />
                    <h5 className="mb-0">{ticket.tenPhim}</h5>
                    <span className="small text-uppercase text-muted">{moment(ticket.ngayDat).format('hh:mm A - DD-MM-YYYY')}</span>
                    <p className="mt-2 small text-uppercase ">Địa điểm: {_.first(ticket.danhSachGhe).tenHeThongRap} - {_.first(ticket.danhSachGhe).tenCumRap}</p>
                    <p className="mt-2 small text-uppercase text-muted">Ghế {_.sortBy(ticket.danhSachGhe, ['tenGhe']).map((ghe, i) => {
                        return <span key={i} className="mr-2" >{ghe.tenGhe}</span>
                    })}</p>
                </div>
            </div>
        })
    }

    return (

        <div className="container py-5">
            <div className="row mb-4" >
                <div className="col-lg-12 text-center">
                    <h2 className="display-4 font-weight-light ">Lịch Sử Đặt Vé Khách Hàng</h2>
                    <p className="font-italic text-muted">Hãy xem địa chỉ và thời gian để xem phim vui vẽ bạn nhé !</p>
                </div>
            </div>
            <div className="row text-center justify-content-center" style={{ gap: '15px' }}>
                {/* Team item*/}
                {renderTicketItem()}
                {/* End*/}

            </div>
        </div>



    )
}

const Tab_Profile = (props) => {

    return (
        <Tabs className='m-5'
            defaultActiveKey='1'
            items={[
                {
                    label: (<h1 >01 THÔNG TIN CÁ NHÂN</h1>),
                    key: '1',
                    children: (<div>
                        <Profile {...props} />
                    </div>),
                },
                {
                    label: (<h1 >02 LỊCH SỬ ĐẶT VÉ</h1>),
                    key: '2',
                    children: (<div>
                        <LSDV  {...props} />
                    </div>),
                },
            ]}
        />
    )
}

export default Tab_Profile;
