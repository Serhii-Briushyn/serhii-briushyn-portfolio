const ModalWindow = ({ message, onClose }) => {
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-[5%] z-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-primary border border-white/20 rounded-lg p-8 3xl:p-12 4xl:p-16 5xl:p-24 mx-auto text-center w-full max-w-md xl:max-w-[30vw]">
        <p className="text-sm sm:text-lg xl:text-[1vw] xl:leading-[1.8] whitespace-pre-line">
          {message}
        </p>
        <button
          onClick={onClose}
          className="mt-6 2xl:mt-8 3xl:mt-10 4xl:mt-14 5xl:mt-16 px-8 py-2 sm:px-10 2xl:px-12 2xl:py-3 3xl:px-16 4xl:px-20 4xl:py-4 5xl:px-28 5xl:py-6 bg-accent text-white rounded-full text-sm sm:text-lg xl:text-[1vw] xl:leading-[1.8] transition-colors duration-300 ease-in-out hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
