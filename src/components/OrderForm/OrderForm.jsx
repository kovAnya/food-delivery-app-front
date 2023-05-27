import * as Yup from "yup";
import { Formik, Form, ErrorMessage, Field } from "formik";
import { OrderItem } from "./OrderItem/OrderItem";
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

export const OrderForm = ({
  products,
  totalCost,
  onCountChange,
  onRemoveBtnClick,
}) => {
  const handleSubmit = (values) => {};
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        name: "",
        email: "",
        address: "",
        mobilePhone: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.form_wrapper}>
          <div className={css.inputs_wrapper}>
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
              <ErrorMessage
                name="address"
                component="p"
                className={css.error}
              />
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
              <ErrorMessage
                name="address"
                component="p"
                className={css.error}
              />
            </label>
          </div>
          <div className={css.order_list_wrapper}>
            <ul className={css.order_list}>
              {products.map((product) => {
                return (
                  <OrderItem
                    product={product}
                    key={product._id}
                    onCountChange={onCountChange}
                    onRemoveBtnClick={onRemoveBtnClick}
                  />
                );
              })}
            </ul>
          </div>
        </div>

        <div className={css.totalCost_wrapper}>
          <button className={css.btn} type="submit">
            Sumbit
          </button>
          <p>
            Total cost: <span className={css.cost}>{totalCost}$</span>
          </p>
        </div>
      </Form>
    </Formik>
  );
};
