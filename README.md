Certainly! Here’s the complete `README.md` file ready to be copied and pasted:

```markdown
# Quote Finder App

The Quote Finder App is a React-based application that fetches random quotes from the Ron Swanson Quotes API. It allows users to save their favorite quotes and persist them using local storage. This ensures that saved quotes are retained even after the page is refreshed.

## Features

- Fetch a random quote from the Ron Swanson Quotes API.
- Save quotes to a list of favorites.
- Persist saved quotes using local storage.
- Display success and error notifications using `react-hot-toast`.
- Responsive design for various screen sizes.

## Demo

[Live Demo](https://quote-finder-mauve.vercel.app/)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/quote-finder-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quote-finder-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## Dependencies

- React
- react-hot-toast
- Tailwind CSS

## Code Overview

### `App.js`

- Main component that fetches quotes and manages state.
- Displays a random quote and buttons to save the quote or fetch a new one.
- Uses `react-hot-toast` for notifications.

### `SavedItems.js`

- Displays a list of saved quotes.
- Allows users to delete quotes from the saved list.

### `Header.js`

- Simple header component.

### `useLocalStorageState.js`

- Custom hook to manage state with local storage persistence.

