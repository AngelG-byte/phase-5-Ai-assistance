class AiSerializer < ActiveModel::Serializer
  attributes :id, :name, :prompt, :personality
end
