class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  private

  def authenticate_token_by_firebase
    authenticate_with_http_token do |token, _|
      FirebaseAuthHelper.verify_id_token(token)

    rescue StandardError => e
      logger.error(e.message)
      false
    end
  end

  def current_user
    if (token = authenticate_token_by_firebase)
      User.find_by(uid: token['uid'])
    else
      false
    end
  end
end
