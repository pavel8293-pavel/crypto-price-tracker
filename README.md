## crypto-price-tracker

# Overview

**Crypto Price Tracker** is a simple web application built using React.js and TypeScript that allows users to track the current prices of selected cryptocurrencies. It consists of two pages:

**All Coins** - where you can select/unselect and reset all selected coins.

-   There are two buttons:
    -   `Track Selected Coins` - to switch to the **Track Coins** page (disabled if there are no selected coins).
    -   `Reset All` - to reset all selected coins (disabled if there are no selected coins).
-   A section with cards of available coins (each card has a `select/unselect` button).

**Track Coins** - where you can track the prices of selected coins.

-   There is one button:
    -   `All Coins` - to switch to the **All Coins** page.
-   A section with cards of available coins (each card displays prices).
-   A bar chart displaying the prices of selected coins.

# First start

Follow these steps to get started with the project:

1.  Clone the project from the repository:
    -   Run the following command in your terminal `git clone https://github.com/**{your-username}**/crypto-price-tracker.git`
    -   Alternatively, you can download the ZIP file from the repository and extract it into a folder on your computer.
2.  Open the project folder in your integrated development environment (IDE). Ensure that the terminal path matches the project path.
3.  Install project dependencies by running the following command in your terminal: `npm install`
4.  Start the project by running the following command in your terminal: `npm run start`
5.  Once the project is running, open your web browser and visit [http://localhost:3000](http://localhost:3000/) to view it in the browser.


Now you're ready to explore and use the Crypto Price Tracker web application.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

# Screenshots

See [Image1](https://i.ibb.co/MPHfdGW/Screenshot-2023-09-15-at-12-11-20.png)
See [Image2](https://i.ibb.co/y40Y6BG/Screenshot-2023-09-15-at-12-11-02.png)
See [Image3](https://i.ibb.co/k5xpwBP/Screenshot-2023-09-15-at-12-10-37.png)
See [Image4](https://i.ibb.co/2hRf07b/Screenshot-2023-09-15-at-12-07-57.png)

# Features

- **Responsive UI:** The application is designed to work seamlessly on various screen sizes and devices.
- **Cryptocurrency List:** Display a list of popular cryptocurrencies, including their names, symbols, and current prices.
- **Cryptocurrency Selection:** Allow users to select or deselect cryptocurrencies to track.
- **Data Fetching:** Fetch cryptocurrency price data from a free cryptocurrency API and update prices at regular intervals without refreshing the entire page.
- **TypeScript:** Utilize TypeScript for type safety and improved code quality.
- **Modular Architecture:** Follow a modular component-based architecture for better code organization.
- **Reusable Components:** Use reusable components and functions to keep the code DRY (Don't Repeat Yourself).
- **Meaningful Naming:** Employ meaningful variable and function names for code readability.
- **Folder Structure:** Properly structure the codebase into folders for components, utility functions, and styles.
- **Price Chart:** Display a chart.
- **LocalStorage Persistence:** Persist the user's selected cryptocurrencies using browser localStorage or sessionStorage, so selections are remembered between sessions.
