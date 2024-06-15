import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    initialState: {
        items: [],
        isLogin: false,
        token: '',
        userData: {},
        isAdmin: false,
        isBrandOwner: false
    },
    name: 'cart',
    reducers: {
        Add: (state , action) => {
            let itemIndex;
            itemIndex = state.items.findIndex((item) => item.name === action.payload.name)
            
            const existItem = state.items[itemIndex]
                if (existItem){
                    existItem.amount += +action.payload.quantaty
                }else {
                    state.items =  [...state.items , action.payload]
                }
        },
        Remove: (state , action) => {
            const itemIndex = state.items.findIndex((item) => item.name === action.payload.name)
            const existItem = state.items[itemIndex]
            
            if (existItem.amount > 1) {
                existItem.amount--
            }else {
                state.items = state.items.filter((item)=> item.name !== action.payload.name)
            }
        },
        ChooseSize: (state , action) => {
            let itemIndex = state.items.findIndex((item) => item.name === action.payload.name)
            state.items[itemIndex].size = action.payload.size

        },
        Delete: (state , action) => {
            state.items = state.items.filter((item)=> item.name !== action.payload.name)
        },
        Reset: (state) => {
            state.items = []
        },
        LogIn: (state , action) => {
            state.isLogin = true
            state.token = action.payload
        },
        LogOut: (state) => {
            state.isLogin = false;
            state.token = ''
        },
        AdduserData: (state , action) => {
            state.userData = action.payload
            state.isAdmin = action.payload.role === "ADMIN" ? true : false
            state.isBrandOwner = action.payload.role === "brandOwner" ? true : false
        }
    }
})

export const {Add , Remove , Reset , Delete , LogIn , LogOut , AdduserData , ChooseSize  } = cartSlice.actions

export default cartSlice.reducer

