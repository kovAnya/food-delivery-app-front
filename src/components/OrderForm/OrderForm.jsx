import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import css from "./OrderForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(70, "Too Long!")
    .required("Name is required"),
  address: Yup.string().required("Address is required"),
  mobilePhone: Yup.string()
    .required("Mobile phone is required")
    .label("Mobile phone")
    .matches(/^\+380\d{9}$/, "Correct format: +380981234567"),
});

export const OrderForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{ name: "", email: "", address: "", mobilePhone: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name">
          Name:
          <Field
            className={css.field}
            id="name"
            type="text"
            name="name"
            placeholder="Name"
          />
          <ErrorMessage name="name" component="p" className={css.error} />
        </label>

        <label htmlFor="email">
          Email:
          <Field
            className={css.field}
            id="email"
            type="text"
            name="email"
            placeholder="email@email.com"
          />
          <ErrorMessage name="address" component="p" className={css.error} />
        </label>

        <label htmlFor="mobilePhone">
          Phone:
          <Field
            className={css.field}
            id="mobilePhone"
            type="text"
            name="mobilePhone"
            placeholder="+380xxxxxxxxx"
          />
          <ErrorMessage
            name="mobilePhone"
            component="p"
            className={css.error}
          />
        </label>

        <label htmlFor="address">
          Address:
          <Field
            className={css.field}
            id="address"
            type="text"
            name="address"
            placeholder="Please, enter your address"
          />
          <ErrorMessage name="address" component="p" className={css.error} />
        </label>

        <button type="submit">Sumbit</button>
      </Form>
    </Formik>
  );
};
