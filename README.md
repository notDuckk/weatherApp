# WeatherWiz

WeatherWiz is a simple weather app built with HTML, JavaScript, and CSS. It allows users to enter a US zip code and see current weather details such as temperature, conditions, and more, using the [OpenWeatherMap](https://openweathermap.org/api). API.

## Getting Started

To run this app on your local machine, follow these steps:

### Prerequisites
- Web browser (e.g., Chrome, Firefox).
- Text editor (optional, e.g., VSCode).


### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/yourusername/weatherwiz.git
    ```

2. Navigate to the project folder:
    ```bash
    cd weatherwiz
    ```

3. Open the `index.html` file in your browser:
    - You can drag and drop `index.html` into a browser window, or use a tool like VSCode's Live Server.

### Usage

1. Enter a US zip code.
2. Click "Search" to view the weather information for that location.

## API Setup

1. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api).
2. Open `weather.js` and replace the `apiKey` variable with your own key:
   ```javascript
   const apiKey = 'your_api_key_here';