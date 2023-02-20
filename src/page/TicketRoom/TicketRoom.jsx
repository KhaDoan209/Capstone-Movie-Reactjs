import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './TicketRoom.css';
import _ from 'lodash';
import { datGheAction, datVeAction, layChiTietPhongVeAction } from '../../redux/action/filmAction';
import { CloseOutlined, UserAddOutlined, CheckOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { DAT_VE } from '../../redux/types/filmTypes';
import { ThongTinDatVe } from '../../_core/models/ThongTinDatVe';
import { layThongTinNguoiDungAction } from '../../redux/action/quanLyNguoiDungaction';
import moment from 'moment';
import { connection } from '../../index';

const TicketRoom = (props) => {
    const { userLogin } = useSelector(state => state.quanLyNguoiDungReducer);
    const { chiTietPhongVe, danhSachGheDangDat, danhSachGheKhachDat } = useSelector(state => state.QuanLyDatVeReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        const action = layChiTietPhongVeAction(props.match.params.id)
        dispatch(action)

        // Load danh sách ghế đang đặt từ sever về
        connection.on("loadDanhSachGheDaDat", (dsGheKhachDat) => {
            console.log('danhsachghekhachdat',dsGheKhachDat);
        });
    }, [])

    console.log({ chiTietPhongVe })

    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

    const renderSeats = () => {
        return danhSachGhe.map((ghe, i) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';

            let classGheDangDat = "";
            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);

            let classGheKhachDat = "";
            //Kiểm tra xem ghế đó có phải ghế khách đang đặt không 
            let indexGheKD = danhSachGheKhachDat.findIndex(gheKD => gheKD.maGhe === ghe.maGhe)
            if (indexGheKD !== -1) {
                classGheKhachDat = 'gheKhachDat';
                console.log('classGheKhachDat',classGheKhachDat);
            }

            let classGheDaDuocDat = "";
            if (userLogin.taiKhoan === ghe.taiKhoanNguoiDat) {
                classGheDaDuocDat = 'gheDaDuocDat';
            }

            if (indexGheDD !== -1) {
                classGheDaDat = 'gheDangDat'
            }


            return <Fragment key={i}>
                <button onClick={() => {

                    const action = datGheAction(ghe,props.match.params.id);
                    dispatch(action);


                }} disabled={ghe.daDat || classGheKhachDat !==""} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} ${classGheDaDuocDat} ${classGheKhachDat} text-center`} key={ghe.maGhe}>
                    {ghe.daDat ? classGheDaDuocDat !== "" ? <UserAddOutlined style={{ marginBottom: 4 }} /> : <CloseOutlined style={{ marginBottom: 4 }} /> : ghe.stt}
                </button>
                {(i + 1) % 16 === 0 ? <br /> : ""}
            </Fragment>
        })
    }

    return (
        <div className='m-5'>
            <div className="row">
                <div className="col-9">
                    <div className='d-flex flex-column align-items-center mt-5'>
                        <div className='bg-dark w-100' style={{ width: '80%', height: 15 }}>
                        </div>
                        <div className='trapezoid text-center'>
                            <h3 className='mt-2 text-dark'>Màn Hình</h3>
                        </div>
                        <div>
                            {renderSeats()}
                        </div>
                    </div>
                    <div className='mt-2 d-flex justify-content-center'>
                        <table>
                            <thead>
                                <tr>
                                    <th className='pl-4 text-center'>Ghế chưa đặt</th>
                                    <th className='pl-4 text-center'>Ghế đang đặt</th>
                                    <th className='pl-4 text-center'>Ghế Vip</th>
                                    <th className='pl-4 text-center'>Ghế đã đặt</th>
                                    <th className='pl-4 text-center'>Ghế Bạn đã đặt</th>
                                    <th className='pl-4 text-center'>Ghế khách đang đặt</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='text-center'><button className='ghe '><CheckOutlined /></button></td>
                                    <td className='text-center'><button className='ghe gheDangDat'><CheckOutlined /></button></td>
                                    <td className='text-center'><button className='ghe gheVip'><CheckOutlined /></button></td>
                                    <td className='text-center'><button className='ghe gheDaDat'><CheckOutlined /></button></td>
                                    <td className='text-center'><button className='ghe gheDaDuocDat'><CheckOutlined /></button></td>
                                    <td className='text-center'><button className='ghe gheKhachDat'><CheckOutlined /></button></td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="col-3 mt-5">
                    <h3 className='text-center text-success'>{danhSachGheDangDat.reduce((tongTien, ghe, i) => {
                        return tongTien += ghe.giaVe;
                    }, 0).toLocaleString()} VNĐ</h3>
                    <hr />
                    <h3 className=''>{thongTinPhim.tenPhim}</h3>
                    <p>Địa Điểm:{thongTinPhim.tenCumRap}</p>
                    <p>Ngày Chiếu:{thongTinPhim.ngayChieu}-{thongTinPhim.gioChieu}</p>
                    <hr />
                    <div className="row my-3">
                        <div className='col-8'>
                            <span className='text-danger'>Ghế:</span>
                            {_.sortBy(danhSachGheDangDat, ['stt']).map((gheDD, i) => {
                                return <span key={i} className="text-success ml-2"> {gheDD.stt}</span>
                            })}
                        </div>
                        <div className="col-4">
                            <span>{danhSachGheDangDat.reduce((tongTien, ghe, i) => {
                                return tongTien += ghe.giaVe;
                            }, 0).toLocaleString()} VNĐ</span>
                        </div>
                    </div>
                    <hr />
                    <div className='my-3'>
                        <i>Email</i> <br />
                        {userLogin.email}
                    </div>
                    <div className='my-3'>
                        <i>Phone</i> <br />
                        {userLogin.soDT}

                    </div>
                    <hr />
                    <div className='mb-0 d-flex justify-content-center align-items-center' style={{ height: 50 }} >
                        <div onClick={() => {
                            const thongTinDatVe = new ThongTinDatVe();
                            thongTinDatVe.maLichChieu = props.match.params.id;
                            thongTinDatVe.danhSachVe = danhSachGheDangDat
                            console.log("hihi", thongTinDatVe)

                            //Truyen vao thong tin dat ve 
                            dispatch(datVeAction(thongTinDatVe));

                        }} className='bg-success w-100 text-center text-white p-2 cursor-pointer'>
                            Đặt Vé
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const KQDatVe = (props) => {
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


const Tab_Booking = (props) => {
    const { tabActive } = useSelector(state => state.QuanLyDatVeReducer)
    const dispatch = useDispatch();

    return (
        <Tabs className='m-5'
            defaultActiveKey='1' activeKey={tabActive}
            items={[
                {
                    label: (<h1 onClick={() => {
                        dispatch({
                            type: 'CHUYEN_TAB_ACTIVE',
                            number: '1',
                        })
                    }}>01 CHỌN GHẾ & THANH TOÁN</h1>),
                    key: '1',
                    children: (<div>
                        <TicketRoom {...props} />
                    </div>),
                },
                {
                    label: (<h1 onClick={() => {
                        dispatch({
                            type: 'CHUYEN_TAB_ACTIVE',
                            number: '2',
                        })
                    }}>02 KẾT QUẢ ĐẶT VÉ</h1>),
                    key: '2',
                    children: (<div>
                        <KQDatVe {...props} />
                    </div>),
                },
            ]}
        />
    )
}

export default Tab_Booking;
