class Api::AnswersController < ApplicationController

    def create
        @answer = Answer.new(answer_params)
        if @answer.save
            render "api/answers/show"
        else
            render json: @answer.errors.full_messages, status: 422
        end
    end

    def answer_params
        params.require(:answer).permit(:body, :author_id, :question_id)
    end
end
