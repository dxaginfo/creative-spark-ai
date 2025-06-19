# CreativeSpark AI

An AI-powered content idea generator for blogs, social media, videos, and newsletters.

## 🌟 Overview

CreativeSpark AI is a web application that leverages artificial intelligence to help content creators, marketers, and social media managers overcome creative blocks and streamline their content planning process. By analyzing trends, user preferences, and industry-specific data, CreativeSpark generates relevant, engaging content ideas tailored to specific platforms and audiences.

## ✨ Key Features

- **Multi-platform Idea Generation**: Generate ideas for blogs, social media posts, videos, and newsletters
- **Industry-specific Recommendations**: Tailored suggestions based on your niche or industry
- **Tone and Style Customization**: Adjust content ideas to match your brand voice
- **Trending Topics Analysis**: Stay relevant with ideas based on current trends
- **Content Calendar Integration**: Plan and schedule your content pipeline
- **Idea Organization**: Save, categorize, and tag ideas for future use
- **Collaboration Tools**: Share ideas with team members and gather feedback
- **Analytics Dashboard**: Track performance and optimize your content strategy

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.x or later)
- MongoDB
- OpenAI API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dxaginfo/creative-spark-ai.git
   cd creative-spark-ai
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   # Backend
   cd backend
   npm install

   # Frontend
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   ```bash
   # Backend .env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   OPENAI_API_KEY=your_openai_api_key
   PORT=4000

   # Frontend .env
   REACT_APP_API_URL=http://localhost:4000/api
   ```

4. Run the application:
   ```bash
   # Backend
   cd backend
   npm run dev

   # Frontend
   cd ../frontend
   npm start
   ```

Visit `http://localhost:3000` to view the application.

## 🛠️ Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material UI component library
- Styled Components for styling
- React Router for navigation
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT authentication
- OpenAI API integration
- Redis for caching
- Jest for testing

### DevOps
- GitHub Actions for CI/CD
- Vercel for frontend hosting
- Heroku for backend deployment
- Docker for containerization

## 📋 Project Structure

```
creative-spark-ai/
├── frontend/              # React frontend application
│   ├── public/            # Static files
│   ├── src/               # Source files
│   │   ├── components/    # UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store configuration
│   │   ├── services/      # API services
│   │   ├── hooks/         # Custom React hooks
│   │   ├── utils/         # Utility functions
│   │   └── styles/        # Global styles
│   └── package.json       # Frontend dependencies
│
├── backend/               # Node.js backend application
│   ├── src/               # Source files
│   │   ├── controllers/   # Request controllers
│   │   ├── models/        # Database models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   ├── middleware/    # Express middleware
│   │   ├── utils/         # Utility functions
│   │   └── config/        # Configuration files
│   └── package.json       # Backend dependencies
│
├── .github/               # GitHub configuration
│   └── workflows/         # GitHub Actions workflows
│
└── README.md              # Project documentation
```

## 🔄 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/refresh` - Refresh token
- `POST /api/auth/logout` - User logout

### User Management
- `GET /api/users/me` - Get current user
- `PUT /api/users/me` - Update user profile
- `GET /api/users/subscription` - Get subscription details
- `PUT /api/users/subscription` - Update subscription

### Content Ideas
- `POST /api/ideas/generate` - Generate new ideas
- `GET /api/ideas` - Get saved ideas
- `GET /api/ideas/:id` - Get specific idea
- `PUT /api/ideas/:id` - Update idea
- `DELETE /api/ideas/:id` - Delete idea
- `POST /api/ideas/:id/share` - Share idea with team

### Analytics
- `GET /api/analytics/usage` - Get usage statistics
- `GET /api/analytics/performance` - Get content performance metrics

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📬 Contact

Have questions or feedback? Reach out to us or open an issue on GitHub.

---

Built with ❤️ by the CreativeSpark AI team