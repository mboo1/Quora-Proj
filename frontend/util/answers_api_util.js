export const createAnswer = answer => (
    $.ajax({
        method: "POST",
        url: "/api/answers",
        data: {answer: answer}
    })
)