import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./ItemModal.css";
import { useState } from "react";

function EditItemModal({ isOpen, onClose, item, handleEditSubmit }) {
  const [formData, setFormData] = useState({
    name: item.name,
    type: item.type,
    weather: item.weather,
    price: item.price,

    imageUrl: item.imageUrl,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleEditSubmit(item.id, formData);
    onClose();
  };

  return (
    <ModalWithForm
      title="Edit Item"
      onClose={onClose}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <div className="modal__form-content">
        <label className="modal__label">
          Name
          <input
            type="text"
            name="name"
            className="modal__input"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label className="modal__label">
          Type
          <select
            name="type"
            className="modal__input"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="">Select type</option>
            <option value="tops">Tops</option>
            <option value="bottoms">Bottoms</option>
            <option value="shoes">Shoes</option>
            <option value="accessories">Accessories</option>
          </select>
        </label>

        <label className="modal__label">
          Weather
          <select
            name="weather"
            className="modal__input"
            value={formData.weather}
            onChange={handleChange}
            required
          >
            <option value="">Select weather</option>
            <option value="hot">Hot</option>
            <option value="warm">Warm</option>
            <option value="cold">Cold</option>
          </select>
        </label>

        <label className="modal__label">
          Price
          <input
            type="number"
            name="price"
            className="modal__input"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            min="0"
            required
          />
        </label>

        <label className="modal__label">
          Image URL
          <input
            type="url"
            name="imageUrl"
            className="modal__input"
            placeholder="Image URL"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </label>
      </div>
    </ModalWithForm>
  );
}

export default EditItemModal;
