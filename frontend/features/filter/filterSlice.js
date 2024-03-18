import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    jobList: {
        keyword: "",
        location: "",
        destination: {
            min: 0,
            max: 100,
        },
        category: "",
        jobType: [],
        jobTypeSelect: "",
        datePosted: "",
        experience: [],
        experienceSelect: "",
        salary: {
            min: 0,
            max: 20000,
        },
        tag: "",
    },
    jobSort: {
        sort: "",
        perPage: {
            start: 0,
            end: 0,
        },
    },
};

export const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        addKeyword: (state, { payload }) => {
            state.jobList.keyword = payload;
        },
        addLocation: (state, { payload }) => {
            state.jobList.location = payload;
        },
        addDestination: (state, { payload }) => {
            state.jobList.destination.min = payload.min;
            state.jobList.destination.max = payload.max;
        },
        addCategory: (state, { payload }) => {
            state.jobList.category = payload;
        },
        addJobType: (state, { payload }) => {
            const isExist = state.jobList.jobType.includes(payload);
            if (!isExist) {
                state.jobList.jobType.push(payload);
            } else {
                state.jobList.jobType = state.jobList.jobType.filter(
                    (item) => item !== payload
                );
            }
        },
        clearJobType: (state) => {
            state.jobList.jobType = [];
        },
        addJobTypeSelect: (state, { payload }) => {
            state.jobList.jobTypeSelect = payload;
        },
        addDatePosted: (state, { payload }) => {
            state.jobList.datePosted = payload;
        },
        addExperience: (state, { payload }) => {
            const isExist = state.jobList.experience.includes(payload);
            if (!isExist) {
                state.jobList.experience.push(payload);
            } else {
                state.jobList.experience = state.jobList.experience.filter(
                    (item) => item !== payload
                );
            }
        },
        addExperienceSelect: (state, { payload }) => {
            state.jobList.experienceSelect = payload;
        },
        clearExperience: (state) => {
            state.jobList.experience = [];
        },
        addSalary: (state, { payload }) => {
            state.jobList.salary.min = payload.min;
            state.jobList.salary.max = payload.max;
        },
        addSort: (state, { payload }) => {
            state.jobSort.sort = payload;
        },
        addTag: (state, { payload }) => {
            state.jobList.tag = payload;
        },
        addPerPage: (state, { payload }) => {
            state.jobSort.perPage.start = payload.start;
            state.jobSort.perPage.end = payload.end;
        },
    },
});

export const {
    addKeyword,
    addLocation,
    addDestination,
    addCategory,
    addJobType,
    clearJobType,
    addJobTypeSelect,
    addDatePosted,
    addExperience,
    addExperienceSelect,
    clearExperience,
    addSalary,
    addTag,
    addSort,
    addPerPage,
} = filterSlice.actions;
export default filterSlice.reducer;
