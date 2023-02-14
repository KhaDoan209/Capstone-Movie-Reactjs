import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import './TicketRoom.css';
import { layChiTietPhongVeAction } from '../../redux/action/filmAction';
import { CloseOutlined } from '@ant-design/icons';
import { DAT_VE } from '../../redux/types/filmTypes';

const TicketRoom = (props) => {
    // const {userLogin} = useSelector (state => state.QuanLyNguoiDungReducer)
    const { chiTietPhongVe,danhSachGheDangDat } = useSelector(state => state.QuanLyDatVeReducer);

    const dispatch = useDispatch();

    useEffect(() => {

        const action = layChiTietPhongVeAction(props.match.params.id)
        dispatch(action)
    }, [])

    console.log({ chiTietPhongVe })

    const { thongTinPhim, danhSachGhe } = chiTietPhongVe;

    const renderSeats = () => {
        return danhSachGhe.map((ghe, i) => {
            let classGheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : '';
            let classGheDaDat = ghe.daDat === true ? 'gheDaDat' : '';
            let classGheDangDat = "";

            let indexGheDD = danhSachGheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe);
           if(indexGheDD != -1) {
            classGheDaDat = 'gheDangDat'
           }
           
           
           return <Fragment key={i}>
                <button onClick={()=>{
                    dispatch({
                        type:DAT_VE,
                        gheDuocChon:ghe
                    })
                }} disabled={ghe.daDat} className={`ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat} text-center`} key={ghe.maGhe}>
                    {ghe.daDat ? <CloseOutlined style={{marginBottom:4}} />: ghe.stt}
                </button>
                {(i + 1) % 10 === 0 ? <br /> : ""}
            </Fragment>
        })
    }

    return (
        <div className='container'>
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

                </div>
                <div className="col-3 mt-5">
                    <h3 className='text-center text-success'>{danhSachGheDangDat.reduce((tongTien,ghe,i) => {
                                return tongTien +=ghe.giaVe;
                            },0).toLocaleString()} VNĐ</h3>
                    <hr />
                    <h3 className=''>{thongTinPhim.tenPhim}</h3>
                    <p>Địa Điểm:{thongTinPhim.tenCumRap}</p>
                    <p>Ngày Chiếu:{thongTinPhim.ngayChieu}-{thongTinPhim.gioChieu}</p>
                    <hr />
                    <div className="row my-3">
                        <div className='col-8'>
                            <span className='text-danger'>Ghế:</span>
                            {(danhSachGheDangDat).map((gheDD,i) => {
                                return <span key={i} className="text-success ml-2"> {gheDD.stt}</span>
                            })}
                        </div>
                        <div className="col-4">
                            <span>{danhSachGheDangDat.reduce((tongTien,ghe,i) => {
                                return tongTien +=ghe.giaVe;
                            },0).toLocaleString()} VNĐ</span>
                        </div>
                    </div>
                    <hr />
                    <div className='my-3'>
                        <i>Email</i> <br />
                        {/* {userLogin.email} */}
                    </div>
                    <div className='my-3'>
                        <i>Phone</i> <br />
                        {/* {userLogin.soDT} */}

                    </div>
                    <hr />
                    <div className='mb-0 d-flex justify-content-center align-items-center' style={{ height: 50 }} >
                        <div className='bg-success w-100 text-center text-white p-2 cursor-pointer'>
                            Dat Ve
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TicketRoom;
