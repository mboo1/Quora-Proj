json.question do
    json.extract! @question, :id, :title, :body, :author_id, :created_at
    json.answerIds @question.answers.pluck(:id)
    json.authorIds @question.answers.pluck(:author_id)
    json.topicIds @question.topics.pluck(:id)
end

@question.answers.includes(:author).each do |answer|
    json.answers do
        json.set! answer.id do
            json.extract! answer, :id, :body, :author_id, :question_id, :created_at
        end
    end

    json.users do
        json.set! answer.author.id do
            json.extract! answer.author, :id, :username
        end
    end
end
