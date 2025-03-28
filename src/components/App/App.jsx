import { useEffect, useState } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { Routes, Route } from "react-router-dom";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { checkToken } from "../../utils/auth";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
//import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import Profile from "../Profile/Profile";
import RegisterModal from "../RegisterModal/RegisterModal";

import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import {
  getItems,
  addItem,
  deleteCard,
  addCardLike,
  removeCardLike,
} from "../../utils/api";

import ConfirmModal from "../ConfirmModal/ConfirmModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setActiveModal("preview");
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleAddItemModalSubmit = ({ name, imageUrl, weather }, reset) => {
    return addItem({ name, imageUrl, weather })
      .then((values) => {
        setClothingItems([values, ...clothingItems]);
        closeActiveModal();
        reset();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (cardId) => {
    deleteCard(selectedCard._id)
      .then((data) => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        setSelectedCard({});
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleOpenDelete = (cardId) => {
    setActiveModal("confirm-modal");
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((res) => {
        const items = res.data;
        setClothingItems(items);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt)
        .then((res) => {
          setCurrentUser(res);
          setIsLoggedIn(true);
        })
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("jwt");
        });
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleLikeClick = (itemId, isLiked) => {
    const likePromise = isLiked ? removeCardLike(itemId) : addCardLike(itemId);
    likePromise
      .then((updatedCard) => {
        setClothingItems((cards) =>
          cards.map((c) => (c._id === itemId ? updatedCard : c))
        );

        if (selectedCard._id === itemId) {
          setSelectedCard(updatedCard);
        }
      })
      .catch(console.error);
  };
  return (
    <CurrentUserContext.Provider
      value={{
        currentUser,
        isLoggedIn,
        handleSignOut,
        setCurrentUser,
        setIsLoggedIn,
      }}
    >
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              onRegisterClick={() => setActiveModal("register-modal")}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    onLikeClick={handleLikeClick}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile
                      handleAddClick={handleAddClick}
                      handleCardClick={handleCardClick}
                      clothingItems={clothingItems}
                      onLikeClick={handleLikeClick}
                    />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Footer />
          </div>
          <AddItemModal
            activeModal={activeModal}
            onClose={closeActiveModal}
            onAddItemModalSubmit={handleAddItemModalSubmit}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            onClose={closeActiveModal}
            onOpenDelete={handleOpenDelete}
          />
          <ConfirmModal
            isOpen={activeModal === "confirm-modal"}
            onSubmit={handleDelete}
            onClose={closeActiveModal}
          />
          <RegisterModal
            isOpen={activeModal === "register-modal"}
            onSubmit={() => console.log("register submit triggered")}
            onClose={closeActiveModal}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
