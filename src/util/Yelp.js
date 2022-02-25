const apiKey = '5LVB8-OLeM0AKAz2WafjYj38A0jJ8bE6TQz5xJ_NRbrY4ZXHULbRXljnoydE7V8OB4PqMwJA7u-emOybL0xXeHRvs8LkVakHWRLWTaKdiMaT_BxHKA9InOB3MmIVYnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(

      `https://corsanywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {headers: {Authorization: `Bearer ${apiKey}`}}
    ).then(
      response => {
        return response.json();
      }
    ).then(
      jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.review_count,
            }
          })
        }
      }
    )
  }
};

export default Yelp;
