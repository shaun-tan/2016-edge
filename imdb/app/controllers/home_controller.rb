class HomeController < ApplicationController

  def index
  end

  def actor
    @actor = "jack"
    render :json => { :actor => "james"}
  end

end
