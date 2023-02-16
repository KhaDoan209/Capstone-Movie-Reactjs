import React from 'react';
import './Detail_cricle.css'
import { Tabs, Rate } from 'antd';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layThongTinChiTietPhim } from '../../redux/action/filmAction'
import moment from 'moment/moment';
import { NavLink } from 'react-router-dom';

const { TabPane } = Tabs;

const Detail = (props) => {
    const [tabPosition, setTabPosition] = useState('left');
    const changeTabPosition = (e) => {
        setTabPosition(e.target.value);
    };

    const filmDetail = useSelector(state => state.QuanLyPhimReducer.filmDetail);
    console.log({ filmDetail })
    const dispatch = useDispatch();

    useEffect(() => {
        //lay thong tin param tu url
        let { id } = props.match.params;

        dispatch(layThongTinChiTietPhim(id))
    }, [])

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4'>
                    <img src={filmDetail.hinhAnh} style={{ width: '100%', height: 450 }} alt="123" />
                </div>
                <div className='col-4'>
                    <p>Ngày Khởi Chiếu : {moment(filmDetail.ngayKhoiChieu).format('DD-MM-YYYY')}</p>
                    <p className=''>{filmDetail.tenPhim}</p>
                    <p>{filmDetail.moTa}</p>
                </div>
                <div className='col-4 danhgia'>
                    <p>Đánh giá</p>
                    <Rate disabled defaultValue={(filmDetail.danhGia) / 2} />
                    <div className={`c100 p${filmDetail.danhGia * 10} big`}>
                        <span>{filmDetail.danhGia * 10}%</span>
                        <div className="slice">
                            <div className="bar" />
                            <div className="fill" />
                        </div>
                    </div>

                </div>
            </div>

            <Tabs defaultActiveKey='1' centered className='mt-5'>

                <TabPane tab="Lịch Chiếu" key="1" style={{ minHeight: 300 }}>
                    <Tabs className='mt-5 px-5 py-5' tabPosition={'left'}>
                        {filmDetail.heThongRapChieu?.map((htr, i) => {
                            return <TabPane tab={<div><img className='mr-2' src={htr.logo} width={50} height={50} alt={htr.logo} />{htr.tenHeThongRap}</div>} key={i}>
                                {htr.cumRapChieu?.map((cumRap, i) => {
                                    return <div key={i}>
                                        <div className="flex-column">
                                            <div className='d-flex'>
                                                <img className='mr-2' style={{ width: 50, height: 50 }} src={cumRap.hinhAnh} />
                                                <div>
                                                    <h5>{cumRap.tenCumRap} </h5>
                                                    <p>{cumRap.diaChi}</p>
                                                </div>
                                            </div>
                                            <div className='thong-tin-lich-chieu row row-cols-4 mt-2'>
                                                {cumRap.lichChieuPhim?.map((lichChieu, i) => {
                                                    return <NavLink to={`/ticketroom/${lichChieu.maLichChieu}`} key={i} className="col text-success">
                                                        {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                    </NavLink>
                                                })}

                                            </div>
                                        </div>

                                    </div>
                                })}
                            </TabPane>
                        })}
                    </Tabs>
                </TabPane>
                
                <TabPane tab="Thông Tin" key="2">
                    2
                </TabPane>
                
                <TabPane tab="Đánh Gía" key="3">
                    3
                </TabPane>
            
            </Tabs>







        </div>
    );
}

export default Detail;
