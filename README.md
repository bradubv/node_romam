Site to build a community of professionals.

## Requirements

- Node.js 22+
- npm 10+

## Install

```bash
npm install
npx playwright install chromium
```

## Run

Start the app in production mode:

```bash
npm start
```

The server will be available at `http://localhost:3000`.

### Development

To get automatic restarts on file changes, use `nodemon`:

```bash
npx nodemon romam.js
```

## Test

Run unit tests only:

```bash
npm run test:unit
```

Run integration tests only (starts the server automatically):

```bash
npm run test:integration
```

Run all tests:

```bash
npm test
```