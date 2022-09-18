const stateDefault = {
    mangSinhVien:[
        {
            maSV:'1',
            hoTen:'microsoft',
            phoneNumber:'0909123456',
            email:'microsoft@gmail.com',
        }
    ],
}

export const infoSinhVien = (state = stateDefault, action) => {
    switch (action.type) {
      case 'ADD_SINH_VIEN':{
        console.log(action)
        const mangSVUpdate = [...state.mangSinhVien,action.payload.value];
        state.mangSinhVien = mangSVUpdate
        return {...state}
      };

        default:return {...state}
    }
}