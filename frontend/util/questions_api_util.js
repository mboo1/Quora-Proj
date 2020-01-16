export const fetchQuestions = (topic) =>(
    $.ajax({
        method: "GET",
        url: `/api/questions?topic=${topic}`,
    })
)

export const fetchQuestion = (questionId) =>(
    $.ajax({
        method: "GET",
        url: `/api/questions/${questionId}`
    })
)

export const createQuestion = (question) => (
    $.ajax({
        method: "POST",
        url: "/api/questions",
        data: {question: question}
    })
)

export const destroyQuestion = (questionId) => (
    $.ajax({
        method: "DELETE",
        url: `/api/questions/${questionId}`
    })
)