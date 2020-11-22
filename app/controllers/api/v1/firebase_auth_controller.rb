module Api
  module V1
    class FirebaseAuthController < ApplicationController
      def register
        token = authenticate_token_by_firebase
        render json: { message: 'Invalid token' }, status: :unauthorized and return unless token

        user = User.find_by(uid: token['uid'])
        render json: { message: 'Already registered' }, status: :bad_request and return if user.present?
      end

      def login
        if (token = authenticate_token_by_firebase)
          user = User.find_by(uid: token['uid'])
          render json: { message: 'logged in successfully' } and return if user.present?

          user = User.new({ uid: token['uid'], display_name: token['uid'] })
          if user.save
            render json: { message: 'registered successfully' }
          else
            render json: { message: 'register failed', errors: user.errors }
          end
        else
          render json: { message: 'login failed', errors: ['invalid token'] }, status: :unauthorized
        end
      end
    end
  end
end
