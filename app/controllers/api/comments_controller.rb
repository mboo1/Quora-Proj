class Api::CommentsController < ApplicationController
    
    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render "api/comments/show"
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find(params[:id])
        if @comment.destroy
            render json: ["Comment Destroyed"]
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find(params[:id])
        if @comment.update(comment_params) 
            render "api/comments/show"
        else 
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def comment_params 
        params.require(:comment).permit(:author_id, :answer_id, :body)
    end
end
