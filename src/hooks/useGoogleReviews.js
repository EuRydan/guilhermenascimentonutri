import { useState, useEffect } from 'react';

export function useGoogleReviews(placeId) {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!placeId) {
      setError(new Error("Place ID is required"));
      setLoading(false);
      return;
    }

    // Check if the script is loaded
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      setError(new Error("Google Maps JavaScript API not loaded"));
      setLoading(false);
      return;
    }

    try {
      // Create a dummy map element since PlacesService requires an HTMLDivElement or Map
      const map = new window.google.maps.Map(document.createElement('div'));
      const service = new window.google.maps.places.PlacesService(map);

      service.getDetails({
        placeId,
        fields: ['reviews']
      }, (place, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && place && place.reviews) {
          // Format reviews to match our previous local shape where needed
          const formattedReviews = place.reviews.map((review, index) => ({
            id: index,
            name: review.author_name,
            text: review.text,
            date: review.relative_time_description,
            avatar: review.profile_photo_url,
            rating: review.rating,
            tags: [] // future tags
          }));
          setReviews(formattedReviews);
        } else {
          // If no reviews found or other status error
          setError(new Error(`PlacesServiceStatus: ${status}`));
        }
        setLoading(false);
      });
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [placeId]);

  return { reviews, loading, error };
}
