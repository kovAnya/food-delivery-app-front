import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { findOrder } from "../../services/fetchApi";
import css from "./FindOrderForm.module.css";

const validationSchema = Yup.object({
  email: Yup.string().required("Email is required"),
  phone: Yup.string()
    .required("Mobile phone is required")
    .label("Mobile phone")
    .matches(/^\+380\d{9}$/, "Correct format: +380981234567"),
});

export const FindOrderForm = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    const result = await findOrder({ ...values });
    actions.resetForm({
      values: {
        email: "",
        phone: "",
      },
    });
    onSubmit(result.data);
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        email: "",
        phone: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="email">
          Email:
          <Field
            className={css.field}
            id="email"
            type="text"
            name="email"
            placeholder="email@email.com"
          />
          <ErrorMessage name="email" component="p" className={css.error} />
        </label>

        <label htmlFor="phone">
          Phone:
          <Field
            className={css.field}
            id="phone"
            type="text"
            name="phone"
            placeholder="+380xxxxxxxxx"
          />
          <ErrorMessage name="phone" component="p" className={css.error} />
        </label>
        <div className={css.btn_wrapper}>
          <button className={css.btn} type="submit">
            Sumbit
          </button>
        </div>
      </Form>
    </Formik>
  );
};
