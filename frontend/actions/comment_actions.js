import * as ApiCommentUtil from "../util/comments_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment: comment
})

const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId: commentId
})

export const createComment = comment => dispatch => (
    ApiCommentUtil.createComment(comment).then(comment => dispatch(receiveComment(comment)))
)

export const updateComment = comment => dispatch => (
    ApiCommentUtil.updateComment(comment).then(comment => dispatch(receiveComment(comment)))
)

export const destroyComment = commentId => dispatch => (
    ApiCommentUtil.destroyComment(commentId).then(() => dispatch(removeComment(commentId)))
)