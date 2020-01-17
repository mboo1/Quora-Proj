class ApplicationController < ActionController::Base

    # skip_before_action :verify_authenticity_token

    helper_method :current_user, :logged_in?

    def login!(user)
        user.reset_session_token!
        session[:session_token] = user.session_token
        @current_user = user
        # debugger
        b = 1
    end

    def current_user
        @current_user = User.find_by(session_token: session[:session_token])
        
        return @current_user
        # return nil unless session[:session_token]
        # current_user = User.find_by(session_token: session[:session_token])
        # return current_user
    end

    def logged_in?
        # debugger
        !!current_user
    end

    def logout!
        
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end
end
