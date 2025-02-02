# BeyondChats Chatbot Setup UI  

## Live Demo  
🔗 Hosted on Vercel: [BeyondChats Live Demo](https://ritik-beyond-chats.vercel.app/)  
🔗 GitHub Repository: [RitikRK96/Beyond-Chats](https://github.com/RitikRK96/Ritik-Beyond-chats.git)  

## Project Overview  
BeyondChats Chatbot Setup UI is a **React-based** application designed for seamless chatbot integration for businesses. This project provides an intuitive, step-by-step guide for setting up a chatbot and integrating it into a company’s website. The application is fully responsive and focuses on delivering a user-friendly experience.

## Features  
### 1️⃣ Authentication (`components/Auth/`)  
- **Signup & Login**: Users can register and log in securely.  
- **Email Verification**: Simulated OTP-based email confirmation for enhanced security.  
- **Auth Context**: Manages user authentication globally across the app.  
- **Dummy Data Display**: Shows mock data for user activity and information.  

### 2️⃣ Organisation Setup (`components/Organisation/`)  
- **Setup Organisation**: Collects company name, website URL, and a brief description.  
- **Scraping Status**: Displays the status of website scraping with details like:  
  - Scraped  
  - Pending  
  - In Progress  

### 3️⃣ Chatbot Integration & Testing (`components/Chatbot/`)  
- **Integration**: Provides a script snippet for easy integration into the company website.  
- **Testing**: Allows users to test chatbot functionality with a simulated interface.  
- **Success Confirmation**: Displays a confetti animation upon successful integration.  

---

## Tech Stack  
🚀 **Frontend:**  
- React.js with Vite for fast development  
- React Router for seamless navigation  
- Tailwind CSS for responsive and modern styling  

📦 **Additional Libraries:**  
- `react-confetti` for celebratory animations  
- `react-router-dom` for routing  

---

## Installation & Setup  
### 1️⃣ Clone the Repository  
```bash
git clone https://github.com/RitikRK96/Ritik-Beyond-chats.git
cd Ritik-Beyond-chats
2️⃣ Install Dependencies
bash
Copy
npm install
3️⃣ Run the App Locally
bash
Copy
npm run dev
The app will be accessible at http://localhost:5173 (default Vite port).

Folder Structure
Copy
/src
│── /components        # UI Components
│    ├── /Auth         # Authentication components & context
│    ├── /Chatbot      # Chatbot integration and testing components
│    ├── /Organisation # Organisation setup & scraping components
│── /styles            # Global and component-specific styles
│── App.jsx            # Main App component
│── main.jsx           # React entry point
│── ProtectedRoute.jsx # Route protection logic
│── index.html         # Root HTML file
│── vite.config.js     # Vite configuration
Deployment
This project is deployed on Vercel for fast and scalable hosting.

Deploying Your Own
Fork the Repository on GitHub.

Connect the Repository to Vercel.

Deploy with One Click through the Vercel dashboard.

Contributing
We welcome contributions! Feel free to fork the project, open issues, or submit pull requests.

License
This project is licensed under the MIT License.

Contact
For questions or support, please reach out at:
📧 contactbeyondchats@gmail.com

Acknowledgements
Special thanks to the BeyondChats team for their vision and support in making this project a reality.

Copy

### **How to Use This in VS Code:**  
1. **Open your project** in **VS Code**.  
2. In the root directory, create or open **README.md**.  
3. **Paste the content** above into the file.  
4. **Save the file** (`Ctrl + S` or `Cmd + S` on Mac).  

Now you have a professional and detailed README for your project! 🚀 Let me know if you need any other adjustments. 😊
