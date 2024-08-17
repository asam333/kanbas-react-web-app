import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    quizzes: [],
};
const quizzesSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },

        addQuizToState: (state, { payload: quiz }) => {
            const newQuiz: any = {
                name: quiz.name,
                course: quiz.course,
            };
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },
        deleteQuizFromState: (state, { payload: quizId }) => {
            state.quizzes = state.quizzes.filter(
                (q: any) => q._id !== quizId);
        },
        
        // updatequiz: (state, { payload: quiz }) => {
        //     state.quizzes = state.quizzes.map((m: any) =>
        //         m._id === quiz._id ? quiz : m
        //     ) as any;
        // },
        // editquiz: (state, { payload: quizId }) => {
        //     state.quizzes = state.quizzes.map((m: any) =>
        //         m._id === quizId ? { ...m, editing: true } : m
        //     ) as any;
        // },
    },
});
export const { addQuizToState, setQuizzes,deleteQuizFromState } =
    quizzesSlice.actions;
export default quizzesSlice.reducer;