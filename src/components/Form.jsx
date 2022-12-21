export const Form = ({ getData, addData, setIsModalOpened }) => {
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const inputObject = Object.fromEntries(formData);
    addData(inputObject);
    getData();
    // Object.from.forEach((_, key) => {
    //   formData.delete(key);
    // });
    setIsModalOpened(false);
  };

  return (
    <form onSubmit={handleSubmitForm} className="form">
      <div className="form__group">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="form__control"
        />
      </div>
      <div className="form__group">
        <input
          type="text"
          name="email"
          placeholder="Email"
          className="form__control"
        />
      </div>
      <div className="form__group">
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          className="form__control"
        />
      </div>
      <button className="form__button" type="submit">
        Submit
      </button>
    </form>
  );
};
