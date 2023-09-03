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
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        alert(".then");
        if (res.status === 200) {
          toast.success("Submited Successfully!");
          // contactController.resetForm();
          alert("status 200");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("catch");
      });
  };

  const exports = { contactController };
  return exports;
};
export default useContact;
