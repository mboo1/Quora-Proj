export const selectAnswers = (answers, answerIds) => {
    return answerIds.map(Id => answers[Id])
}

export const selectAuthors = (authors, authorIds) => {
    
    let res = {};
    authorIds.forEach(authorId => res[authorId] = authors[authorId]);
    return res
}