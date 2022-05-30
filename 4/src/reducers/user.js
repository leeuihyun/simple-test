import { handleActions } from "redux-actions";
import { produce } from "immer";
import { v4 as uuidv4 } from "uuid";

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const ADD_IMAGE_USER_SUCCESS = "ADD_IMAGE_USER_SUCCESS";

export const DELETE_IMAGE_USER_SUCCESS = "DELETE_IMAGE_USER_SUCCESS";

export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";

export const CHECK_ALL_USERS = "CHECK_ALL_USERS";

const initialState = {
    allUsers: [
        {
            id: "random_1_1",
            email: "lee",
            password: "123123",
            name: "leeuihyun",
            city: "seoul",
            age: 26,
            myImage: [],
        },
    ], //모든 유저 정보 담고 있는 배열
    user: null, //현재 로그인한 유저 정보
    signUpLoading: false,
    signUpDone: false,
    signUpError: null,
    logInLoading: false,
    logInDone: false,
    logInError: null,
};

const dummyUser = (data) => ({
    id: data.id,
    myImage: data.myImage,
});

const dummyAllUser = (data) => ({
    id: uuidv4(),
    email: data.email,
    password: data.password,
    name: data.name,
    city: data.city,
    age: data.age,
    myImage: [],
});
const user = handleActions(
    {
        [LOG_IN_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.logInLoading = true;
                draft.logInDone = false;
                draft.logInError = null;
            }),
        [LOG_IN_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                const us = draft.allUsers.find(
                    (v) =>
                        v.email === action.data.email &&
                        v.password === action.data.password
                );

                if (us) {
                    draft.user = dummyUser(us);
                }
                const allUsersData = JSON.parse(
                    localStorage.getItem("allUsers")
                );
                const fs = allUsersData.find(
                    (v) =>
                        v.email === action.data.email &&
                        v.password === action.data.password
                );
                if (fs) {
                    console.log("찾았습니다!");
                }
                draft.logInLoading = false;
                draft.logInDone = true;
            }),
        [LOG_IN_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.logInLoading = false;
                draft.logInError = action.error;
            }),
        [ADD_IMAGE_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                const findUser = draft.allUsers.find(
                    (v) => v.id === action.data.User.id
                );
                findUser.myImage.unshift(action.data); // 서버 역할을 하기 때문에 전체에서도 추가해준다.
                draft.user.myImage.unshift({
                    id: action.data.Data.id,
                    name: action.data.Data.name,
                    tag: action.data.Data.tag,
                    author: action.data.Data.author,
                    path: action.data.Data.file.path,
                    preview: action.data.Data.file.preview,
                });
                var allUsersData = JSON.parse(localStorage.getItem("allUsers"));
                allUsersData.forEach((v) => {
                    if (v.id === action.data.User.id) {
                        v.myImage.unshift({
                            id: action.data.Data.id,
                            name: action.data.Data.name,
                            tag: action.data.Data.tag,
                            author: action.data.Data.author,
                            path: action.data.Data.file.path,
                            preview: action.data.Data.file.preview,
                        });
                    }
                });
                localStorage.setItem("allUsers", JSON.stringify(allUsersData));
            }),
        [DELETE_IMAGE_USER_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                const findUser = draft.allUsers.find(
                    (v) => v.id === action.data.User.id
                );
                findUser.myImage.filter((v) => v.id !== action.data.Data.id);
                draft.user.myImage.filter((v) => v.id !== action.data.Data.id);
                const allUsersData = JSON.parse(
                    localStorage.getItem("allUsers")
                );
                allUsersData.forEach((v) => {
                    if (v.id === action.data.User.id) {
                        v.myImage.filter((t) => t.id !== action.data.Data.id);
                    }
                });
            }),
        [SIGN_UP_REQUEST]: (state, action) =>
            produce(state, (draft) => {
                draft.signUpLoading = true;
                draft.signUpDone = false;
                draft.signUpError = null;
            }),
        [SIGN_UP_SUCCESS]: (state, action) =>
            produce(state, (draft) => {
                draft.allUsers.push(dummyAllUser(action.data));
                var allUsersData = JSON.parse(localStorage.getItem("allUsers"));
                allUsersData.unshift(dummyAllUser(action.data));
                localStorage.setItem("allUsers", JSON.stringify(allUsersData));
                draft.signUpLoading = false;
                draft.signUpDone = true;
            }),
        [SIGN_UP_FAILURE]: (state, action) =>
            produce(state, (draft) => {
                draft.signUpLoading = false;
                draft.signUpError = action.error;
            }),
        [CHECK_ALL_USERS]: (state, action) =>
            produce(state, (draft) => {
                if (!JSON.parse(localStorage.getItem("allUsers"))) {
                    var allUsersData = [
                        {
                            id: "random_1_1",
                            email: "lee",
                            password: "123123",
                            name: "leeuihyun",
                            city: "seoul",
                            age: 26,
                            myImage: [],
                        },
                    ];
                    localStorage.setItem(
                        "allUsers",
                        JSON.stringify(allUsersData)
                    );
                }
            }),
    },
    initialState
);

export default user;
