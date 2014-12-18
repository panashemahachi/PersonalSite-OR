Rails.application.routes.draw do
  resources :thoughts

  root :to => "home#index"

  resource :stay_tuned do
    get "index"
end

end
