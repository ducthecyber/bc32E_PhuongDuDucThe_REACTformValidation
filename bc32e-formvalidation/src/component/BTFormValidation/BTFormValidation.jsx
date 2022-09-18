import React, { Component } from 'react'
import DanhSachNguoiDung from './DanhSachNguoiDung'
import FormDangKy from './FormDangKy'
import { connect } from 'react-redux'

class BTFormValidation extends Component {
  render() {
    return (
      <div className='max-w-7xl m-auto lg:py-4'>
        <FormDangKy />
        <DanhSachNguoiDung />
      </div>
    )
  }
}

//kết nối component với store
export default connect()(BTFormValidation)