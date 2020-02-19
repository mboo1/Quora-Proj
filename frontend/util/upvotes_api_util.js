export const createUpvote = upvote => (
    $.ajax({
        method: "POST",
        url: "/api/upvotes",
        data: {upvote: upvote}
    })
)

export const destroyUpvote = (upvoteId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/upvotes/${upvoteId}`
    })
)