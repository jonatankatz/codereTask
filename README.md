
# 🚀 codere task react




## 🚀 Tech Stack
- **React**: Frontend framework for building the UI.
- **MobX**: For state management.
- **Swiper.js**: For creating responsive and smooth carousels.
- **Axios**: For API calls to fetch odds data.

## 🛠 Installation & Setup

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/landing-page-odds-carousel.git
    ```

2. **Install dependencies**:
    Navigate into the project directory and install all dependencies:

    npm install
    

3. **Start the development server**:
    Run the following command to start the React development server:
    ```bash
    npm run dev
    ```
    The app will be running on [http://localhost:5173](http://localhost:5173).


### 1. **Banner Carousel**
- Implemented with **Swiper.js**.
- Autoplay with 3250ms delay between transitions.
- Fade transition effect.

### 2. **Odds Carousel**
- Fetches data from: `https://inicio-banner-server-51647ce90258.herokuapp.com/games`.
- Supports sorting by:
  - **Date** (default),
  - **Team Name (A-Z)**,
  - **Team Name (Z-A)**.
- Uses **MobX** to store and manage odds globally.

### 3. **Form for Adding New Match (Bonus)**
- Allows users to add a new match (home team, away team, odds, etc.).
- Dynamically updates the odds carousel with the new match added to the global state.

### 4. **Casino Games Section**
- Displays static content based on the mockup.

## 🌐 External Dependencies

- [React](https://reactjs.org/)
- [Swiper.js](https://swiperjs.com/react)
- [MobX](https://mobx.js.org/README.html)
- [Axios](https://axios-http.com/)
- [React-Modal](https://github.com/reactjs/react-modal/)
- [React-hook-form](https://https://react-hook-form.com/)



