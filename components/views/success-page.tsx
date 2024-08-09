export const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">Спасибо за регистрацию!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Менеджер свяжется с вами в WhatsApp в течение 1-2 часов.
        </p>
        <div className="w-16 h-16 mx-auto mb-4">
          <svg
            className="w-full h-full text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};
