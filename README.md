# euegene

A simple yet powerful web application for creating, managing, and products. Built with modern web technologies and focused on simplicity.

[Live Demo]() | [Report Bug](https://github.com/kancherish/euegene/issues)

### Demo Account
```
Email: user@guest.com
Password: user1234
```

## ✨ Features

- Create and manage your product from admin side
- browse products
- add to cart or wishlist


## 🚀 Quick Start

### Prerequisites

- Node.js
- Appwrite account and project setup


### Installation

1. Clone the repository
```bash
git clone https://github.com/kancherish/euegene.git
cd eugene
```

2. Install dependencies
```bash
# Using npm
npm install
```

3. Environment Setup
- Copy `.env.sample` to create `.env`
- Configure your Appwrite credentials in `.env`:
  ```
  APPWRITE_ENDPOINT=your_endpoint
  APPWRITE_PROJECT_ID=your_project_id
  # Add other required variables
  ```

4. Start Development Server
```bash

# Using npm
npm run dev
```

5. Build for Production
```bash
# Using npm
npm run build
```

# note:
to access admin side add /admin at the end of the root url and login with admin id added to .env file

## 🛠️ Tech Stack

### Frontend
- **Framework:** React.js
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Routing:** React Router
- **Form Handling:** React Hook Form

### Backend
- **Backend as a Service:** [Appwrite](https://www.appwrite.io)

### Build Tools
- **Bundler:** Vite
- **Runtime:** Node JS

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

- Report bugs and issues
- Suggest new features
- Submit pull requests
- Provide code reviews and feedback

## 📝 Notes

- The application is currently optimized for desktop viewing
- Mobile responsiveness improvements are in progress

## ⚠️ Known Issues

- Limited mobile device optimization
