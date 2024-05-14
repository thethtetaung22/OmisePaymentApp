import { createSlice } from "@reduxjs/toolkit";
import { CardInterface } from "../../constants/interfaces";

type StateType = {
    cards: Array<CardInterface>
}

const initialState: StateType = {
    cards: []
    // [{
    //     name: 'Thet Htet Aung',
    //     number: '1234 5678 9012 1234',
    //     exiryDate: '12/28',
    //     cvv: '123'
    // }]
};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard(state: any, action: any) {
            state.countryAndRegion = action?.payload;
        },
    }
});

export const {
    addCard
} = cardSlice.actions;

export default cardSlice.reducer;
