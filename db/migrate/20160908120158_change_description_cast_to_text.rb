class ChangeDescriptionCastToText < ActiveRecord::Migration[5.0]
  def change
    change_column :posts, :description, :text
  end
end
