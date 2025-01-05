function ModalWithForm() {
  return (
    <div className="modal">
      <form className="modal__form">
        <h2 className="modal__title">New Garment</h2>
        <buttton className="modal__close">close</buttton>
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />{" "}
        </label>
        <label htmlFor="imageUrl" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageUrl"
            placeholder="Image URL"
          />
        </label>
      </form>
    </div>
  );
}

export default ModalWithForm;
