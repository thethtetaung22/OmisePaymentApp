import { createSlice } from "@reduxjs/toolkit";
import { CardInterface } from "../../constants/interfaces";

type StateType = {
    cards: Array<CardInterface>
}

const initialState: StateType = {
    cards: [
        {
            name: 'Albert Mante',
            number: '5344628069099069',
            exiryDate: '04/29',
            cvv: '138'
        },
        {
            name: "Dan Jerde",
            number: "4786538573296952",
            exiryDate: "05/27",
            cvv: "075"
        },
        {
            name: "Chester Wiegand",
            number: "3528306186278105",
            exiryDate: "12/29",
            cvv: "225"
        },
    ]
};

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        addCard(state: any, action: any) {
            state.cards = action?.payload;
        },
    }
});

export const {
    addCard
} = cardSlice.actions;

export default cardSlice.reducer;
