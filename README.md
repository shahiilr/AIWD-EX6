# 🎯 Media Integrated Event Management System (MEMS)

A modern, professional web-based event management system with integrated multimedia support. This application provides a seamless experience for browsing events and registering for them with an intuitive, visually appealing interface.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Features

### 🎨 Modern UI/UX Design
- **Professional Gradient Theme**: Beautiful purple/blue gradient color scheme (#667eea → #764ba2)
- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Card-Based Layout**: Clean, modern card design with shadows and rounded corners
- **Smooth Animations**: Hover effects, transitions, and smooth scrolling for enhanced user experience
- **Interactive Elements**: Dynamic button states, collapsible content, and visual feedback

### 📅 Event Management
- **Event Listing**: Browse upcoming events with detailed information
- **Event Details**: Expandable event cards showing full descriptions
- **Date Display**: Clear, color-coded event date badges
- **Category Icons**: Visual indicators for different event types

### 📝 Registration System
- **User-Friendly Forms**: Clean, intuitive registration forms
- **Real-Time Validation**: Instant feedback on form inputs
- **Multi-Field Validation**: Validates name, email, and mobile number
- **Visual Feedback**: Color-coded success and error messages
- **Prevent Duplicate Submissions**: Disabled submit button after successful registration

### 🎬 Multimedia Integration
- **Image Display**: High-quality event banners
- **Video Support**: Embedded promotional videos with custom controls
- **Audio Playback**: Audio introduction/announcements
- **Responsive Media**: All media elements adapt to screen size

### 🔒 Security Features
- **XSS Protection**: Proper DOM manipulation to prevent cross-site scripting attacks
- **Input Sanitization**: All user inputs are properly sanitized
- **Form Validation**: Client-side validation for data integrity
- **Secure Coding Practices**: CodeQL verified with 0 security alerts

### 🚀 Performance
- **Zero External Dependencies**: Pure vanilla JavaScript, no jQuery or external libraries
- **Fast Loading**: Optimized assets and minimal code footprint
- **Efficient DOM Manipulation**: Native browser APIs for best performance
- **Progressive Enhancement**: Works on older browsers with graceful degradation

## 📸 Screenshots

### Main Event Page
The main landing page showcasing upcoming events with a beautiful gradient design and multimedia elements.

### Event Details
Expandable event cards showing detailed information about workshops, seminars, and networking events.

### Registration Form
Professional registration form with real-time validation and user-friendly error messages.

## 🛠️ Technology Stack

- **HTML5**: Semantic markup and modern HTML features
- **CSS3**: Custom styling with gradients, animations, and responsive design
  - Flexbox for layout
  - CSS Grid for complex layouts
  - Media queries for responsiveness
  - CSS transitions and transforms
- **Vanilla JavaScript**: Pure JavaScript with no external dependencies
  - DOM manipulation
  - Event handling
  - Form validation
  - Dynamic content updates

## 📁 Project Structure

```
AIWD-EX6/
├── Exp6-AIWD-main/
│   └── Exp6-AIWD-main/
│       ├── event.html          # Main event listing page
│       ├── registration.html   # Event registration form page
│       ├── style.css           # All styles and responsive design
│       ├── script.js           # JavaScript functionality
│       ├── banner.jpg          # Event banner image
│       ├── promo.mp4          # Promotional video
│       └── intro.mp3          # Introduction audio
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, but recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shahiilr/AIWD-EX6.git
   cd AIWD-EX6
   ```

2. **Navigate to the project directory**
   ```bash
   cd Exp6-AIWD-main/Exp6-AIWD-main
   ```

3. **Run with a local server** (Recommended)
   
   Using Python:
   ```bash
   python3 -m http.server 8080
   ```
   
   Using Node.js:
   ```bash
   npx http-server -p 8080
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8080
   ```

4. **Open in browser**
   ```
   http://localhost:8080/event.html
   ```

### Alternative: Direct File Opening
You can also open `event.html` directly in your browser, though some features may work better with a local server.

## 📖 Usage Guide

### Browsing Events

1. **Open the application**: Navigate to `event.html` in your browser
2. **View media content**: Watch the promotional video and listen to the audio introduction
3. **Browse events**: Scroll through the list of upcoming events
4. **Expand details**: Click "Show Details" on any event to see more information
5. **Hide details**: Click "Hide Details" to collapse the event information

### Registering for Events

1. **Select an event**: Click "Register Now" button on your chosen event
2. **Fill the form**: Enter your details:
   - **Full Name**: Your complete name
   - **Email**: Valid email address (format: user@example.com)
   - **Event Name**: Auto-filled from your selection
   - **Mobile Number**: At least 10 digits
3. **Submit**: Click "Submit Registration" button
4. **Confirmation**: See success message with your name
5. **Reset**: Use "Reset Form" to clear all fields

### Form Validation Rules

- **Name**: Cannot be empty
- **Email**: Must be in valid format (contains @ and domain)
- **Mobile**: Must contain at least 10 numeric digits
- **Event Name**: Auto-filled and read-only

### Navigation

- **Back to Events**: Click the "← Back to Events" link on the registration page
- **Smooth Scrolling**: Forms automatically scroll to show validation messages

## 🎨 Customization

### Changing Colors

Edit `style.css` and modify the gradient colors:

```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Adjust these hex values to your preferred colors */
```

### Adding New Events

Edit `event.html` and add a new event block:

```html
<div class="event">
    <h3>Your Event Title</h3>
    <span class="event-date">📆 Event Date</span>
    
    <button class="toggleBtn">Show Details</button>
    
    <div class="details">
        <p>🎯 Your event description here.</p>
        <button class="registerBtn">Register Now</button>
    </div>
</div>
```

### Modifying Validation

Edit `script.js` to change validation patterns:

```javascript
// Email validation pattern
let emailPattern = /^\S+@\S+\.\S+$/;

// Mobile validation pattern (10+ digits)
let mobilePattern = /^[0-9]{10,}$/;
```

## 🔒 Security Considerations

This application implements several security best practices:

1. **XSS Prevention**: All user input is sanitized using proper DOM methods
   - Uses `textContent` instead of `innerHTML` for user data
   - Creates DOM elements safely with `createElement` and `createTextNode`

2. **Input Validation**: Client-side validation for all form fields
   - Email format validation
   - Mobile number format validation
   - Required field checks

3. **CodeQL Verified**: Passed security analysis with 0 alerts

4. **No External Dependencies**: Eliminates supply chain vulnerabilities

**Note**: This is a frontend-only application. For production use, always implement server-side validation and authentication.

## 🌐 Browser Compatibility

| Browser | Minimum Version | Status |
|---------|----------------|---------|
| Chrome  | 90+           | ✅ Fully Supported |
| Firefox | 88+           | ✅ Fully Supported |
| Safari  | 14+           | ✅ Fully Supported |
| Edge    | 90+           | ✅ Fully Supported |
| Opera   | 76+           | ✅ Fully Supported |

### Mobile Support
- ✅ iOS Safari 14+
- ✅ Chrome Mobile 90+
- ✅ Samsung Internet 14+

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🧪 Testing

### Manual Testing Checklist

- [ ] Event details expand/collapse functionality
- [ ] Form validation displays correct errors
- [ ] Successful registration shows confirmation
- [ ] Reset button clears all form fields
- [ ] Media elements (image, video, audio) load correctly
- [ ] Responsive design works on different screen sizes
- [ ] Navigation between pages works correctly
- [ ] No console errors in browser developer tools

### Security Testing

- [x] XSS protection verified
- [x] CodeQL analysis passed (0 alerts)
- [x] Input sanitization tested
- [x] Form validation working correctly

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- Use semantic HTML5 elements
- Follow CSS BEM naming conventions where applicable
- Write clean, commented JavaScript code
- Ensure all code passes ESLint (if configured)
- Test on multiple browsers before submitting PR
- Maintain security best practices

## 🐛 Known Issues

Currently, there are no known issues. If you find a bug, please open an issue on GitHub.

## 🔄 Changelog

### Version 1.0.0 (Current)
- ✅ Modern professional UI design with gradient theme
- ✅ Fully responsive layout for all devices
- ✅ Event listing and detail expansion
- ✅ Registration form with real-time validation
- ✅ Multimedia integration (image, video, audio)
- ✅ XSS protection and security improvements
- ✅ Removed jQuery dependency (vanilla JavaScript)
- ✅ Smooth animations and transitions
- ✅ Accessible and user-friendly interface

## 📜 License

This project is licensed under the MIT License - see below for details:

```
MIT License

Copyright (c) 2026 AIWD-EX6

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## 👥 Authors

- **Original Developer** - Initial work and UI/UX improvements
- **Contributors** - See GitHub contributors list

## 🙏 Acknowledgments

- Design inspiration from modern web applications
- Icons from emoji set
- Security best practices from OWASP guidelines
- Community feedback and contributions

## 📞 Support

For support, questions, or suggestions:
- Open an issue on GitHub
- Contact through GitHub profile

## 🔗 Related Links

- [Repository](https://github.com/shahiilr/AIWD-EX6)
- [Issues](https://github.com/shahiilr/AIWD-EX6/issues)
- [Pull Requests](https://github.com/shahiilr/AIWD-EX6/pulls)

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML, CSS, JavaScript reference
- [OWASP](https://owasp.org/) - Web security best practices
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - Accessibility standards

---

**Made with ❤️ for AIWD Exercise 6**

*Last Updated: March 2026*
