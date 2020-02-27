# json.set! @answer.id do
    json.extract! @answer, :id, :body, :author_id, :question_id, :created_at, :upvotes
# end