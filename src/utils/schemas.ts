import * as yup from "yup";

export const contactSchema = yup.object({
  contactName: yup.string().required("The Fullname Field Is Required."),
  contactEmail: yup
    .string()
    .required("The Email Field Is Required.")
    .email("The Email Format Is Invalid."),
  contactSubject: yup.string().required("The Subject Field Is Required."),
  contactMessage: yup.string().required("The Message Field Is Required."),
});
