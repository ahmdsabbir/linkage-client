import NewPasword from "./new-password";

const ResetPasswordConfirmation = () => {
  return (
    <div className="grid place-content-center p-5">
      <div className="modal-box ">
        <h3 className="text-center font-bold text-lg">
          Plese Check Your Email
        </h3>
        <p className="py-4">
          A varification link has been sent to your email . Click the link and
          you will be redirect to the login page.
        </p>
      </div>
      <NewPasword />
    </div>
  );
};

export default ResetPasswordConfirmation;
