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
    sinhVienCanTim: {
        maSV: '',
        hoTen: '',
        phoneNumber: '',
        email: '',
    },
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
                return { ...state,mangSinhVien:mangSVUpdate }
            }
        };
        case 'SEARCH_STUDENT': {
            console.log(action.payload)
            console.log(state.mangSinhVien)
            let memory = Object.assign({},state)
            const filteredSV = memory.mangSinhVien.filter(item=>{
                return Object.keys(item).some(key=>item[key].toLowerCase().includes(action.payload));
            })
            
            return { ...state,filteredSV}
        }

        default: return { ...state }
    }
}