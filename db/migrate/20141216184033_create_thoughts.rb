class CreateThoughts < ActiveRecord::Migration
  def change
    create_table :thoughts do |t|
      t.string :title
      t.string :tldr
      t.string :category
      t.text :preview
      t.text :content

      t.timestamps
    end
  end
end
