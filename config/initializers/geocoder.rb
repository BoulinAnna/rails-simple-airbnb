Geocoder.configure(
  timeout: 5,                  # Temps d’attente max en secondes
  lookup: :mapbox,             # Utilise Mapbox
  api_key: ENV['MAPBOX_API_KEY'], # Stocke la clé API
  units: :km                    # Utilise des kilomètres
)
