SaidIt::Application.routes.draw do
  class FormatTest
    attr_accessor :mime_type

    def initialize(format)
      @mime_type = Mime::Type.lookup_by_extension(format)
    end

    def matches?(request)
      request.format == mime_type
    end
  end

  resources :tweeters, only: [:index], constraints: FormatTest.new(:json)
  get '*foo', to: 'ember#index', constraints: FormatTest.new(:html)
  get '/', to: 'ember#index', constraints: FormatTest.new(:html)

end
