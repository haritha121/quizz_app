import isEmpty from "is-empty";
import validator from "validator";
export function loginValidator(data) {
  const errors = {};
  (data.email = !isEmpty(data.email) ? data.email : ""),
    (data.password = !isEmpty(data.password) ? data.password : ""),
    (data.firstName = !isEmpty(data.firstName) ? data.firstName : ""),
    (data.lastName = !isEmpty(data.lastName) ? data.lastName : "");
  let emailError = validator.isEmpty(data.email)
    ? "Email is required"
    : !validator.isEmail(data.email)
    ? "Please provide valid email Id"
    : "";
  let passwordError = validator.isEmpty(data.password)
    ? "Password is required"
    : "";
  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
export function registerValidator(data) {
  console.log("Data in validator", data);
  const errors = {};
  (data.email = !isEmpty(data.email) ? data.email : ""),
    (data.password = !isEmpty(data.password) ? data.password : ""),
    (data.firstName = !isEmpty(data.firstName) ? data.firstName : ""),
    (data.lastName = !isEmpty(data.lastName) ? data.lastName : "");
  let emailError = validator.isEmpty(data.email)
    ? "Email is required"
    : !validator.isEmail(data.email)
    ? "Please provide valid email Id"
    : "";
  let passwordError = validator.isEmpty(data.password)
    ? "Password is required"
    : "";
  let firstNameError = validator.isEmpty(data.firstName)
    ? "FirstName is required"
    : "";
  let lastNameError = validator.isEmpty(data.lastName)
    ? "LastName is required"
    : "";

  if (emailError) errors.email = emailError;
  if (passwordError) errors.password = passwordError;
  if (firstNameError || lastNameError)
    errors.firstName = "Full Name is required";
  return {
    errors,
    isValid: isEmpty(errors),
  };
}
