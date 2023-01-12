class CreateAis < ActiveRecord::Migration[6.1]
  def change
    create_table :ais do |t|
      t.string :name
      t.string :password_digest
      t.string :prompt
      

      t.timestamps
    end
  end
end
