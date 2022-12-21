import { Form } from "./Form";

export const Modal = ({ isOpened, setIsOpened, addData, getData }) => {
  const showHiddenClassList = isOpened ? "modal" : "modal hidden";

  const handleClose = () => setIsOpened(false);

  return (
    <div onClick={handleClose} className={showHiddenClassList}>
      <div onClick={(e) => e.stopPropagation()} className="modal__content">
        <Form
          addData={addData}
          getData={getData}
          setIsModalOpened={setIsOpened}
        />
      </div>
    </div>
  );
};
