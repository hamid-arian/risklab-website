import { useFormik } from "formik";
import { contactSchema } from "@/utils/schemas";
import { toast } from "react-hot-toast";
import { useState } from "react";

const useContact = () => {
  const [loading, setLoading] = useState(false);
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
      sendContactForm();
    },
  });

  // send contact form
  const sendContactForm = async () => {
    let data = {
      name: contactController.values.contactName,
      email: contactController.values.contactEmail,
      subject: contactController.values.contactSubject,
      message: contactController.values.contactMessage,
    };
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setLoading(false);
        if (res.status === 200) {
          contactController.resetForm();
          setLoading(false);
          toast.success("Submited Successfully!");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    setLoading(false);
  };

  const exports = { contactController, loading };
  return exports;
};
export default useContact;
