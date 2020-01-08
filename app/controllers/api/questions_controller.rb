class Api::QuestionsController < ApplicationController

    def create
        @question = Question.new(question_params);
        if @question.save
            render "api/questions/show"
        else
            render json: @question.errors.full_messages, status: 422
        end
    end

    def show
        #any way to add error check?  maybe if(Question.find(params[:id].destroy then, else))
        @question = Question.find(params[:id])
        render "api/questions/show"
    end

    def index
        @questions = Question.all
        render "api/questions/index"
    end

    def destroy
        @question = Question.find(params[:id])
        @question.destroy
        render json: ["Question Destroyed"]
    end


    def question_params
        params.require(:question).permit(:title, :body, :author_id)
    end
end
