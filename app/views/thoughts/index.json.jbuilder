json.array!(@thoughts) do |thought|
  json.extract! thought, :id, :title, :tldr, :category, :preview, :content
  json.url thought_url(thought, format: :json)
end
