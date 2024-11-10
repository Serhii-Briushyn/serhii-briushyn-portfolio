import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import Circles from "/components/Circles";
import { fadeIn } from "../../variants";
import * as Yup from "yup";
import ModalWindow from "../../components/ModalWindow";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        setModalMessage(
          "Thank you for reaching out!\nYour message has been successfully sent.\nI'll get back to you as soon as possible.😉"
        );
        resetForm();
      } else {
        setModalMessage(
          "Oops!\nSomething went wrong and your message couldn't be sent.\nPlease try again later or contact me directly at\nserhii.briushyn@icloud.com."
        );
      }
    } catch (error) {
      setModalMessage(
        "An unexpected error occurred while sending your message.\nPlease refresh the page and try again."
      );
    } finally {
      setIsSubmitting(false);
      setShowModal(true);
    }
  };

  return (
    <div className="h-full bg-primary/30 pt-36 lg:pt-24 pb-20 px-[5%] lg:px-[10%]">
      <div className="h-full w-full flex hide-scrollbar lg:items-center justify-center">
        <div className="flex flex-col h-max w-full xl:max-w-[45vw] items-center">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-3xl sm:text-5xl xl:text-[3vw] leading-tight mb-6 4xl:mb-12 5xl:mb-20 xl:mt-10 font-semibold z-20"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>

          <Formik
            initialValues={{ name: "", email: "", subject: "", message: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {() => (
              <Form className="flex flex-col gap-6 5xl:gap-12 w-full">
                <div className="flex gap-x-6 5xl:gap-x-12 w-full">
                  <div className="w-full">
                    <Field
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                  <div className="w-full">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="input"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                </div>

                <div className="w-full">
                  <Field
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="input"
                  />
                  <ErrorMessage
                    name="subject"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="w-full">
                  <Field
                    as="textarea"
                    name="message"
                    placeholder="Message"
                    className="textarea"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="btn rounded-full border border-white/50 max-w-max px-8 5xl:px-20 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
                  disabled={isSubmitting}
                >
                  <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
                    {isSubmitting ? "Sending..." : "Let's talk"}
                  </span>
                  <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] 4xl:text-[26px] 5xl:text-[32px]" />
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>

      {showModal && (
        <ModalWindow
          message={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default Contact;
