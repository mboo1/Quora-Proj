@questions.includes(:answers).each do |question|
    json.questions do
        json.set! question.id do
            json.extract! question, :id, :title, :body, :author_id, :created_at
        end
    end

    question.answers.each do |answer|
        json.answers do
            json.set! answer.id do
                json.extract! answer, :id, :body, :author_id, :question_id, :created_at, :upvotes
            end
        end
    end
end