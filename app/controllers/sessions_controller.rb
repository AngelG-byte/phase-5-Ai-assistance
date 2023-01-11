class SessionsController < ApplicationController
     skip_before_action :check_ai, only: [:create]
    def create
        ai = Ai.find_by(name: params[:name])
        if ai && ai.authenticate(params[:password])
            session[:ai_id] = ai.id
            render json: user
        else
            render json: { errors: "name or password invalid" }, status: 403
        end
    end

    def destroy
        session.delete :user_id
        render json: { message: "Till next time master" }
    end

end
