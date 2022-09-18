import React, { Component } from 'react'
import { connect } from 'react-redux'

class DanhSachNguoiDung extends Component {
    render() {
        const { sinhVien } = this.props
        console.log(sinhVien)
        return (
            <div>
                <div className="mx-auto lg:py-4 dark:text-gray-100 mt-4">
                    <h2 className="mb-4 text-2xl font-semibold leading-tight text-left capitalize">Danh sách sinh viên</h2>
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
    }
}

export default connect(mapStateToProps)(DanhSachNguoiDung)
