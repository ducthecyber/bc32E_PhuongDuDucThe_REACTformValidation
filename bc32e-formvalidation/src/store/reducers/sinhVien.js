const stateDefault = {
    mangSinhVien: [
        {
            id: '13446',
            maSV: '1',
            hoTen: 'microsoft',
            phoneNumber: '0909123456',
            email: 'microsoft@gmail.com',
        },
        {
            id: '66643',
            maSV: '2',
            hoTen: 'apple',
            phoneNumber: '0909125562',
            email: 'apple@gmail.com',
        },
        {
            id: '65435',
            maSV: '3',
            hoTen: 'samsung',
            phoneNumber: '0909777993',
            email: 'samsung@gmail.com',
        }
    ],
    sinhVienCanTim: {
        maSV: '',
        hoTen: '',
        phoneNumber: '',
        email: '',
    },
    selectedUser: null,
}

export const infoSinhVien = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_SINH_VIEN': {
            const user = { ...action.payload.value, id: Date.now().toString() }
            let valid = false;
            const arrError = action.payload.error
            for (let key in arrError) {
                if (arrError[key] === '') {
                    valid = true;
                }
            }
            const arrValue = action.payload.value
            for (let key in arrValue) {
                if (arrValue[key] === '') {
                    valid = false;
                }
            }
            if (valid) {
                const mangSVUpdate = [...state.mangSinhVien, user];

                return { ...state, mangSinhVien: mangSVUpdate }
            }
        };
        // https://stackoverflow.com/questions/51801907/how-to-create-react-search-filter-for-search-multiple-object-key-values
        case 'SEARCH_STUDENT': {
            console.log(action.payload)
            console.log(state.mangSinhVien)
            let memory = Object.assign({}, state)
            const filteredSV = memory.mangSinhVien.filter(item => { return Object.keys(item).some(key => (item[key].toLowerCase().includes(action.payload.toLowerCase()))) })
            //includes is not a function xảy ra khi có giá trị trong mảng không phải là string, trường hợp này là id tạo ra khi dispatch ADD_SINH_VIEN, cần chuyển id sang string bằng cách id.toString()

            // const filteredSV = memory.mangSinhVien.filter(item=>{
            //     return Object.keys(item).some(key=>item[key].toLowerCase().includes(action.payload));
            // })

            return { ...state, filteredSV }
        };
        case 'DELETE_USER': {
            const deleteUser = state.mangSinhVien.filter(item => item.id !== action.payload)
            return { ...state, mangSinhVien: deleteUser }
        };
        case 'EDIT_USER': {
            const edit = state.mangSinhVien.find(item => item.id === action.payload)
            return { ...state, selectedUser: edit }
        };
        case 'UPDATE_USER': {
            console.log(action.payload)
            const newList = state.mangSinhVien.map((item) => item.id === action.payload.id ? action.payload : item)
            state.selectedUser = null
            return { ...state, mangSinhVien: newList }
        }
        default: return { ...state }
    }
}