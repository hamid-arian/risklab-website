import { useFormik } from "formik";
import { contactSchema } from "@/utils/schemas";

const useContact = () => {
  // create provider form controller
  const contactController = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      contactSubject: "",
      contactMessage: "",
    },
    validationSchema: contactSchema,
    onSubmit: (values) => {
      alert("Success.");
    },
  });

  const exports = { contactController };
  return exports;
};
export default useContact;
