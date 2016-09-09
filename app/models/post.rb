class Post < ApplicationRecord
  def to_param
    "#{id}-#{title.parameterize}"
  end
end
