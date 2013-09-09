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

  resource :tweeter, only: [:index, :create], constraints: FormatTest.new(:json)

  match '/tweeter', to: 'ember#index'

  get '*foo', to: 'ember#index', constraints: FormatTest.new(:html)
  get '/', to: 'ember#index', constraints: FormatTest.new(:html)

end
