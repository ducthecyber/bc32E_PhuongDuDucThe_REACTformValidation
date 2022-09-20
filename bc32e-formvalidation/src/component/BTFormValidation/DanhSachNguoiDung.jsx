import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachNguoiDung extends Component {

    searchSV = (event) =>{
        const name = event.target.value
        this.props.info.sinhVienCanTim = {...this.props.info.sinhVienCanTim,name}
        // console.log(this.props.info)
    }

    render() {
        const { sinhVien,info } = this.props
        return (
            <div>
                <div className="mx-auto lg:py-4 dark:text-gray-100 mt-4">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight text-left capitalize">Danh sách sinh viên</h2>
                    <div className='mt-2 mb-4'>
                        {/* <input className='border-2 border-zinc-300 rounded-sm p-3 w-full' type="text" name='searchSV' title='Tên Sinh Viên' placeholder='Nhập tên sinh viên'/> */}
                        
                            <label className="hidden">Search</label>
                            <div className="d-flex relative">
                                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                    <button type="button" title="search" className="p-1 focus:outline-none focus:ring" onClick={()=>{
                                        this.props.dispatch({
                                            type:'SEARCH_STUDENT',
                                            payload:this.props.info.sinhVienCanTim,
                                        })
                                    }}>
                                        <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                            <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                        </svg>
                                    </button>
                                </span>
                                <input onChange={(event)=>this.searchSV(event)} type="search" name="Search" placeholder="Search..." className="flex w-full py-2 pl-10  border-2 border-pink-900 text-sm rounded-md sm:w-1/2 focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900" />
                            </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-xs">
                            <thead className="bg-gray-900 text-white">
                                <tr className="text-left">
                                    <th className="p-3 text-center">Mã SV</th>
                                    <th className="p-3 text-center">Họ Tên</th>
                                    <th className="p-3 text-center">Số Điện Thoại</th>
                                    <th className="p-3 text-center">Email</th>
                                    <th className="p-3 text-center"></th>
                                    <th className="p-3 text-center"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sinhVien.map((item, index) => {
                                        return (
                                            <tr key={index} className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900">
                                                <td className="p-3">
                                                    <p>{item.maSV}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p className='capitalize'>{item.hoTen}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{item.phoneNumber}</p>
                                                </td>
                                                <td className="p-3">
                                                    <p>{item.email}</p>
                                                </td>
                                                <td className="p-3 text-center">
                                                    <button className='bg-yellow-300 text-md py-2 px-3 hover:bg-yellow-500 hover:text-white rounded-md w-full'>Edit</button>
                                                </td>
                                                <td className="p-3 text-center">
                                                    <button className='bg-sky-500 py-2 px-3 text-md hover:bg-sky-700 hover:text-white rounded-md w-2/3'>Update</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        sinhVien: rootReducer.infoSinhVien.mangSinhVien,
        info:rootReducer.infoSinhVien,
    }
}

export default connect(mapStateToProps)(DanhSachNguoiDung)
