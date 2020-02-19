class User < ApplicationRecord
    attr_reader :password

    validates :username, :email, :session_token, :password_digest, presence: true
    validates :username, :email, uniqueness: true
    validates :email, presence: true, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    after_initialize :ensure_session_token

    has_many :questions,
        foreign_key: :author_id,
        class_name: :Question

    has_many :answers,
        foreign_key: :author_id,
        class_name: :Answer

    has_many :upvotes,
        foreign_key: :author_id,
        class_name: :Upvote

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(params)
        user = User.find_by(username: params[:username])
        return nil if user == nil
        if user.is_password?(params[:password])
            return user
        else
            return false
        end
    end

    def is_password?(password)
        retrieved = BCrypt::Password.new(self.password_digest)
        retrieved.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end
end
