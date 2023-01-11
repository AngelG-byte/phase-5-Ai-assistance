class ApplicationController < ActionController::API
  include ActionController::Cookies
 before_action :check_ai
    def check_ai
          unless
            current_ai
             render json: {error: "you are not authorized"}, status: 401
        end
    end

    def current_ai
        Ai.find_by(id: session[:ai_id])
    end
end
