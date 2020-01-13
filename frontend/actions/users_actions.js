import * as usersApiUtil from "../util/users_api_util"

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = (users) => ({
    type: RECEIVE_USERS,
    users: users
})

const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user: user
})

export const fetchUsers = () => dispatch => (
    usersApiUtil.fetchUsers().then(users =>dispatch(receiveUsers(users)))
)

export const fetchUser = (userId) => dispatch => (
    usersApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)))
)
