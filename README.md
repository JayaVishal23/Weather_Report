# Weather_Report
This project is a simple application that provides the current weather report for a specified city. It fetches real-time weather data using a weather API and displays key details such as temperature, wind speed, and general conditions.
# Features
Fetches real-time weather data for any city in the world.
Displays:
- Current temperature
- Feels like
- Weather conditions (e.g., clear, cloudy, rainy)
- Wind speed
Error handling for invalid city names or network issues.
# Technologies Used
- Programming Language: JavaScript
- Backend Framework: Express.js
- API Integration: OpenWeatherMap API
- HTTP Client: Axios for making API requests
- Template Engine: EJS for rendering dynamic content
- Development Tools: Node.js, npm
# How to Run the Application
### 1. Clone the Repository
``` bash
git clone https://github.com/JayaVishal23/Weather_report.git
cd Weather_report
``` 
### 2. Install Dependencies
```bash
npm install
```
### 3. Set Up API Key
Sign up for a free API key from OpenWeatherMap.

Once you have the API key, add API key in your project:
```env
api_id=your_api_key_here
```
### Start the Server: Run the Express server:
```bash
npm start
```
### Access the Application:

Open a web browser and navigate to http://localhost:3000.
The application will prompt you to enter a city name and will display the weather repo.
# Error Handling
If the city name is invalid, the application will display Please enter correct city name.
# License
This project is licensed under the MIT License. See the LICENSE file for details.
