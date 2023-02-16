export const required = (value) =>
  value || typeof value === "number" ? undefined : "This field is required";

export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
export const phone = (value) =>
  value && !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(value)
    ? "Invalid phone number"
    : undefined;
export const fieldLength = (value) =>
  (value && value.length > 10) || value.length < 6
    ? "length name failure!"
    : undefined;
