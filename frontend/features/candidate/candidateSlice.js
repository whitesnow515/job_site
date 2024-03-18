import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: [
        {
            id: 1,
            name: "Residential",
            value: "residential",
        },
        {
            id: 2,
            name: "Commercial",
            value: "commercial",
        },
        {
            id: 3,
            name: "Industrial",
            value: "industrial",
        },
        {
            id: 4,
            name: "Apartments",
            value: "apartments",
        },
    ],
    datePost: [
        { id: 1, name: "All", value: "all", isChecked: false },
        { id: 2, name: "Last Hour", value: "last-hour", isChecked: false },
        {
            id: 3,
            name: "Last 24 Hour",
            value: "last-24-hour",
            isChecked: false,
        },
        {
            id: 4,
            name: "Last 7 Days",
            value: "last-7-days",
            isChecked: false,
        },
        {
            id: 5,
            name: "Last 14 Days",
            value: "last-14-days",
            isChecked: false,
        },
        {
            id: 6,
            name: "Last 30 Days",
            value: "last-30-days",
            isChecked: false,
        },
    ],
    experience: [
        { id: 1, name: "Fresh", value: "fresh", isChecked: false },
        { id: 2, name: "1 Year", value: "1-year", isChecked: false },
        { id: 3, name: "2 Year", value: "2-year", isChecked: false },
        { id: 4, name: "3 Year", value: "3-year", isChecked: false },
        {
            id: 5,
            name: "4 Year",
            value: "4-year",
            isChecked: false,
        },
    ],
    qualification: [
        {
            id: 1,
            name: "Certificate",
            value: "certificate",
        },
        {
            id: 2,
            name: "Associate Degree",
            value: "associate-degree",
        },
        {
            id: 3,
            name: "Bachelor Degree",
            value: "bachelor-degree",
        },
        {
            id: 4,
            name: "Master’s Degree",
            value: "master’s-degree",
        },
        {
            id: 5,
            name: "Doctorate Degree",
            value: "doctorate-degree",
        },
    ],
};

export const candidateSlice = createSlice({
    name: "candidate",
    initialState,
    reducers: {
        addDatePostCheck: (state, { payload }) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                if (item.id === payload) {
                    item.isChecked = true;
                }
                return {
                    ...item,
                };
            });
        },
        clearDatePost: (state, { payload }) => {
            state?.datePost?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        addExperienceCheck: (state, { payload }) => {
            state?.experience?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false;
                    } else {
                        item.isChecked = true;
                    }
                }
                return {
                    ...item,
                };
            });
        },
        clearExperience: (state, { payload }) => {
            state?.experience?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
        addQualificationCheck: (state, { payload }) => {
            state?.qualification?.map((item) => {
                if (item.id === payload) {
                    if (item.isChecked) {
                        item.isChecked = false;
                    } else {
                        item.isChecked = true;
                    }
                }
                return {
                    ...item,
                };
            });
        },
        clearQualification: (state, { payload }) => {
            state?.qualification?.map((item) => {
                item.isChecked = false;
                return {
                    ...item,
                };
            });
        },
    },
});

export const {
    addDatePostCheck,
    addExperienceCheck,
    addQualificationCheck,
    clearDatePost,
    clearExperience,
    clearQualification,
} = candidateSlice.actions;
export default candidateSlice.reducer;
