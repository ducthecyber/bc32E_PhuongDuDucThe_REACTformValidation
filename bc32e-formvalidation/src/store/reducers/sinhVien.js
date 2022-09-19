const stateDefault = {
    mangSinhVien: [
        {
            maSV: '1',
            hoTen: 'microsoft',
            phoneNumber: '0909123456',
            email: 'microsoft@gmail.com',
        }
    ],
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
            for (let key in arrValue){
                if(arrValue[key] === ''){
                    valid = false;
                }
            }
            if (valid) {
                const mangSVUpdate = [...state.mangSinhVien, action.payload.value];
                state.mangSinhVien = mangSVUpdate
                return { ...state }
            }
        };

        default: return { ...state }
    }
}