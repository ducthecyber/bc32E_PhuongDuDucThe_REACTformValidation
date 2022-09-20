const stateDefault = {
    mangSinhVien: [
        {
            maSV: '1',
            hoTen: 'microsoft',
            phoneNumber: '0909123456',
            email: 'microsoft@gmail.com',
        },
        {
            maSV: '2',
            hoTen: 'apple',
            phoneNumber: '0909125562',
            email: 'apple@gmail.com',
        },
        {
            maSV: '3',
            hoTen: 'samsung',
            phoneNumber: '0909777993',
            email: 'samsung@gmail.com',
        }
    ],
    sinhVienCanTim: {},
    tableSearch:[],
}

export const infoSinhVien = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_SINH_VIEN': {

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
                const mangSVUpdate = [...state.mangSinhVien, action.payload.value];
                state.mangSinhVien = mangSVUpdate
                return { ...state }
            }
        };
        case 'SEARCH_STUDENT': {
            console.log(action.payload.name)
            const originList = {...state}
            const arrayStudent = originList.mangSinhVien.filter(item => item.hoTen === action.payload.name)
            console.log(originList)
            return {...state,mangSinhVien:arrayStudent}
        }

        default: return { ...state }
    }
}