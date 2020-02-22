export const createComment = comment => (
    $.ajax({
        method: "POST",
        url: "/api/comments",
        data: {comment: comment}
    })
)

export const destroyComment = (commentId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/comments/${commentId}`
    })
)

export const updateComment = (comment) =>(
    $.ajax({
        method: "PATCH",
        url: `/api/comments/${comment.id}`,
        data: {comment: comment}
    })
)