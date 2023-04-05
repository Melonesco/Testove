import React from "react";
import AboveTheSea from "./components/AboveTheSea";
import Footer from "./components/Footer";
import NewsletterSignupForm from "./components/NewsletterSignUpForm";
import MountainCollections from "./components/MountainCollections";
import EditorPick from "./components/EditorsPick";
import FeaturedSpots from "./components/FeaturedSpots";
import Main from "./components/Main";
import { GlobalWidth } from "./utils/global";
import "./App.css";

function App() {
  return (
    <GlobalWidth>
      <Main />
      <FeaturedSpots />
      <AboveTheSea />
      <EditorPick />
      <MountainCollections />
      <NewsletterSignupForm />
      <Footer />
    </GlobalWidth>
  );
}

export default App;
