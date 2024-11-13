#### Admin Email: `cherryblossom@gmail.com`
#### Admin Password: `cherry`

# [Cloud-BMS](https://cloud-bms.netlify.app)

Cloud-BMS is a full-stack Building Management System (BMS) web application designed to simplify the management of apartments, agreements, payments, and more. It features a role-based dashboard system, providing different functionalities for users, members, and admins.

## ✨ Features

### User Dashboard
- View available apartments
- Apply for an apartment agreements
- View announcements

### Member Dashboard
- Upon admin approval, the user becomes a member
- View apartment details and other statistics
- Make secure rent payments via an integrated payment gateway
- View announcements

### Admin Dashboard
- Approve or reject apartment agreements
- View overall apartment statistics
- View and manage all members
- Create and manage announcements
- Update and manage coupons and discounts

## 🛠️ Tech Stack

### Frontend
- react
- react-dom
- react-router-dom
- react-icons
- react-leaflet
- react-hot-toast
- react-copy-to-clipboard
- swiper
- @heroicons/react
- @material-tailwind/react
- @stripe/react-stripe-js
- @stripe/stripe-js
- @tanstack/react-query
- axios
- firebase

### Backend
- cors
- dotenv
- express
- MongoDB
- stripe

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/DeepsEffect/cloud-bms.git
   ```

2. **Navigate to project directory**

   ```bash
   cd cloud-bms
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```bash
   VITE_APIKEY=<your-firebase-api-key>
   VITE_AUTHDOMAIN=<your-firebase-auth-domain>
   VITE_PROJECTID=<your-firebase-project-id>
   VITE_STORAGEBUCKET=<your-firebase-storage-bucket>
   VITE_MESSAGINGSENDERID=<your-firebase-sender-id>
   VITE_APPID=<your-firebase-app-id>
   VITE_STRIPE_PUBLISHABLE_KEY=<your-stripe-publishable-key>
   VITE_URL='https://cloud-bms-server.vercel.app'
   ```

5. ** Start development server**
   ```bash
      npm run dev
   ```
   Visit [http://localhost:5173](http://localhost:5173) to see the app

## 📞 Contact

Have questions or suggestions? Reach out through:

- [GitHub](https://github.com/DeepsEffect)
- [Twitter](https://x.com/JalalAhmed7845)
- [LinkedIn](https://www.linkedin.com/in/jalal-ahmed-dev)

