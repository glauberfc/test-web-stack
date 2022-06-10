# Superformula Web Developer Test

## Live demo
[test-web-stack-glauberfc.vercel.app](http://test-web-stack-glauberfc.vercel.app/)

## Stack
- Frontend: React, Next.js, Apollo client, GraphQL Code Generator, Typescript, Emotion CSS, React Hook Form
- Test: Jest, Cypress, React Testing Library
- API: GraphQL, Hasura

## Running the app
1. Create an `env.local` file with the environment variables sent by email

2. Install the dependencies:
```bash
npm install
# or
yarn
```

3. Run the app:
```bash
npm run dev
# or
yarn dev
```

## Running tests
- To run Cypress tests:
```bash
npm run e2e:headless
# or
yarn e2e:headless
```

- To run Jest tests:
```bash
npm run test:ci
# or
yarn test:ci
```


## Limitations
Due to time limitations, I have not implemented the requirements below:
- Use unsplash.com to show random avatar images (I used randomuser.me API)
- Show map with user location on modal (I'd use Mapbox or Google Maps API)
- Show user creation date on card (I'd use Day.js to format the date)
- Animate disappear of modal


## Possible improvements
- Load components dynamically when possible
- Use `react-error-boundary` to handle errors
- Improve feedback messages (e.g. when user is updated with success)

## How I approach mobile friendly apps
In simple terms, I try to adopt a mobile first approach developing the components first for mobile and then for desktop. I also like to use Storybook to easily check that if component is adapting to different screen sizes.
