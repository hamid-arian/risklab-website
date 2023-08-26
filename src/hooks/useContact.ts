import { useFormik } from "formik";
import { contactSchema } from "@/utils/schemas";
import { toast } from "react-hot-toast";

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
      toast.success("Sent Successfully");
      contactController.resetForm();
    },
  });

  const exports = { contactController };
  return exports;
};
export default useContact;
