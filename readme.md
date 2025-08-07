# 🌤️ Weather App

<div align="center">

**A beautiful weather application with glassmorphism design**

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

</div>

---

## ✨ Features

- 🌍 **Real-time weather data** for any city worldwide
- 🎨 **Dynamic visuals** with weather-specific backgrounds and emojis
- 💎 **Glassmorphism design** with modern translucent effects
- ⚡ **Fast and lightweight** built with vanilla JavaScript

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/weather-app.git

# Navigate to project folder
cd weather-app

# Open in browser or use a local server
python -m http.server 8000
# Then visit: http://localhost:8000
```

### Project Structure

```
weather-app/
├── index.html     # Main HTML file
├── style.css      # Stylesheet with glassmorphism effects
├── index.js       # JavaScript logic
└── images/        # Weather condition images
    ├── bg.jpg
    ├── cloudy.jpg
    ├── sunnny.jpg
    ├── winter.jpg
    └── rainny.jpg
```

## 🎯 Usage

1. **Enter a city name** in the search field
2. **Click "Get Weather"** or press Enter
3. **View the results** with temperature, humidity, and weather conditions

### Weather Conditions

| Condition | Emoji | Description |
|-----------|-------|-------------|
| Thunderstorm | ⛈️ | Storm conditions with lightning |
| Rain | 🌧️ | Rainy weather |
| Snow | ❄️ | Snow and winter conditions |
| Clear | ☀️ | Clear sunny skies |
| Clouds | ☁️ | Cloudy conditions |
| Fog | 🌫️ | Misty and foggy weather |

## 🛠️ Technical Details

**Built with:**
- Vanilla JavaScript (ES6+)
- CSS3 with glassmorphism effects
- OpenWeatherMap API
- Mobile-first responsive design

**API Integration:**
```javascript
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
```

## 🎨 Customization

### Change API Key
Replace the API key in `index.js`:
```javascript
const apiKey = "your-new-api-key-here";
```

### Add Weather Images
1. Add your image to the `images/` folder
2. Update the HTML with a new `<img>` element
3. Modify the `showWeatherImage()` function in `index.js`

### Style Modifications
Key CSS classes to customize:
- `.container` - Main background
- `.info-container` - Glassmorphism card
- `.card-content` - Weather information display
- `.weatherEmoji` - Weather emoji styling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org) for weather data API
- [Google Fonts](https://fonts.google.com/specimen/Poppins) for Poppins font
- Weather emojis from Unicode standard

---

<div align="center">

**Made with ❤️ for weather enthusiasts**

</div>