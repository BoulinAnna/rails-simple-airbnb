class Flat < ApplicationRecord
  geocoded_by :address # Utilise l'adresse pour obtenir latitude/longitude
  after_validation :geocode, if: :will_save_change_to_address?
end
