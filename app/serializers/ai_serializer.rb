class AiSerializer < ActiveModel::Serializer
  attributes :id, :name, :password_digest, :prompt
end
