class FlatsController < ApplicationController

  def index
    @flats = Flat.all
  end

  def show
    @flat = Flat.find(params[:id])
    @markers = [
      {
        lat: @flat.latitude,
        lng: @flat.longitude
      }
    ]
    puts "🚀 Markers envoyés par Rails : #{@markers.to_json}"

  end

  def new
    @flat = Flat.new
  end

  def create
    @flat = Flat.new(flat_params)
    if @flat.save
      redirect_to flat_path(@flat), notice: "Flat successfully created!"
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def flat_params
    params.require(:flat).permit(:name, :address, :description, :number_of_guests, :price_per_night )
  end

end
