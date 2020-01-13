json.question do
    json.extract! @question, :id, :title, :body, :author_id
end

@question.answers.each do |answer|
    json.answers do
        json.set! answer.id do
            json.extract! answer, :id, :body, :author_id, :question_id
        end
    end
end