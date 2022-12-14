import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormDangKy extends Component {
    state = {
        value: {
            maSV: '',
            hoTen: '',
            phoneNumber: '',
            email: '',
        },
        error: {
            maSV: '',
            hoTen: '',
            phoneNumber: '',
            email: '',
        },
        disabled: false,

    }
    //chuyển props thành state nội bộ
    static getDerivedStateFromProps = (nextProps, currentState)=>{
        console.log(nextProps,currentState)
        if(nextProps.selectedUser && nextProps.selectedUser.id !== currentState.value.id){
            currentState.value = nextProps.selectedUser
        }
        return currentState
    }

    handleBlur = (event) =>{
        const {name,title,validity} =  event.target
        const {valueMissing,patternMismatch} = validity
        // console.log(validity)
        let mess = ''
        if(valueMissing){
            mess = `${title} must be filled out !`
        }

        this.setState({
            error:{
                ...this.state.error,
                [name]:mess,
            }
        })
    }
    handleChange = (event) => {
        let tagInput = event.target
        let { name, value,title } = tagInput
        let errorMessage = '';

        //Kiểm tra rỗng
        if (value.trim() === '') {
            errorMessage = title + ' must be filled out !'
        }

        //kiểm tra mã SV
        if (event.target.name === 'maSV') {
            let regexNumber = /^[0-9]+$/;
            if (!regexNumber.test(value)) {
                errorMessage = title + ' must be numbers !'
            }
        }

        //kiểm tra tên
        if (event.target.name === 'hoTen') {
            let regexLetter = /^[A-Z a-z]+$/;
            if (!regexLetter.test(value)) {
                errorMessage = title + ' must be letters !'
            }
        }

        //kiểm tra email
        if (event.target.type === 'email') {
            let regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
            if (!regexEmail.test(value)) {
                errorMessage = title + ' should be example@mail.com !';
            }
        }

        if (event.target.type === 'number') {
            let regexPhoneNumber = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
            if (!regexPhoneNumber.test(value)) {
                errorMessage = title + ' starts with 03, 05, 07, 09 or 84 and have 10 numbers!'
            }
        }

        let values = { ...this.state.value, [name]: value };
        let errors = { ...this.state.error, [name]: errorMessage }
        
        this.setState({
            value: values,
            error: errors,
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.addSinhVien(this.state)
        this.setState({
            value:{
                maSV: '',
                hoTen: '',
                phoneNumber: '',
                email: '',
            }
        })
    }

    upDateSinhVien = (event)=>{
        this.props.upDateSinhVien(this.state.value)
    }

    render() {
        const sv = this.state.value;
        const { error } = this.state
        // const {selectedUser} =this.props
        // console.log(selectedUser)
        const {maSV,hoTen,phoneNumber,email} = this.state.value

        return (
            <form onSubmit={this.handleSubmit}>
                <div className='text-2xl bg-gray-900 text-white p-3 text-left'>Thông Tin Sinh Viên</div>
                <div className="grid grid-cols-2 gap-5 mt-4">
                    <div className='mt-2'>
                        <p className='text-left mb-2'>Mã SV</p>
                        <input required title='Student ID' value={maSV} type="text" name='maSV' id='studentNo' placeholder='Mã Sinh Viên'
                            className='border-2 border-zinc-300 rounded-sm p-3 w-full' onChange={this.handleChange} onBlur={this.handleBlur}/>
                        <p className='text-red-700 text-left italic'>{error.maSV}</p>
                    </div>
                    <div className='mt-2'>
                        <p className='text-left mb-2'>Họ Tên</p>
                        <input required title='Fullname' value={hoTen} type='text' name='hoTen' id='studentName' placeholder='Họ tên Sinh Viên' className='capitalize border-2 border-zinc-300 rounded-sm p-3 w-full' onChange={this.handleChange} onBlur ={this.handleBlur}/>
                        <p className='text-red-700 text-left italic'>{error.hoTen}</p>
                    </div>
                    <div className='mt-2'>
                        <p className='text-left mb-2'>Số Điện Thoại</p>
                        <input required title='Phone number' value={phoneNumber} type="number" name='phoneNumber' id='studentPhone' placeholder='Số điện thoại' className='border-2 border-zinc-300 rounded-sm p-3 w-full' onChange={this.handleChange} onBlur ={this.handleBlur}/>
                        <p className='text-red-700 text-left italic'>{error.phoneNumber}</p>
                    </div>
                    <div className='mt-2'>
                        <p className='text-left mb-2'>Email</p>
                        <input required title='Email' value={email} type="email" name='email' id='studentEmail' placeholder='emailSinhVien@gmail.com' className='border-2 border-zinc-300 rounded-sm p-3 w-full' onChange={this.handleChange} onBlur={this.handleBlur}/>
                        <p className='text-red-700 text-left italic'>{error.email}</p>
                    </div>
                </div>
                <div className='text-left'>
                    <button disabled={this.state.disabled} type='submit' className='bg-green-700 hover:bg-green-500 p-3 mt-4 text-white rounded-md ml-0'>Thêm Sinh Viên</button>
                    <button disabled={this.state.disabled} type='button' className='bg-rose-800 hover:bg-rose-500 p-3 mt-4 text-white rounded-md ml-2' onClick={this.upDateSinhVien} >Cập nhật</button>
            </div>
            </form >
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSinhVien: (sinhVien) => {
            dispatch({
                type: 'ADD_SINH_VIEN',
                payload: sinhVien,
            })
        },
        upDateSinhVien:(student)=>{
            dispatch({
                type:'UPDATE_USER',
                payload:student,
            })
        }
 
    }
}

const mapStateToProps = (state) =>{
    return{
        ...state.infoSinhVien
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormDangKy)