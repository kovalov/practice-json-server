export const Form = () => {
  return (
    <form className="form">
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
      <button className="form__button" type="button">
        Submit
      </button>
    </form>
  );
};
