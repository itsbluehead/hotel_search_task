# StayFinder Hotel Booking Frontend

A beginner-friendly React + Vite hotel booking frontend using Axios, React Router, and plain CSS.

## Features

- Home page with hotel cards
- Hotel details page
- Search by hotel name or city
- Location filter
- Price filter
- Sorting
- Pagination
- Responsive UI
- API integration with the documented `/api/hotels/` endpoints
- Fallback support for `/hotels/` if the hosted server exposes that path

## API query parameters used

- `search`
- `location`
- `min_price`
- `max_price`
- `min_rating`
- `max_rating`
- `limit`
- `skip`
- `order_by`

## Run the project

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.
