import FormWrapper from "./FormWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import {NavLink} from "react-router-dom";
import productData from "../../data/products";

const Form = ({ form, submit, value }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const customSubmit = (data) => {
    submit(data);
    reset();
  };



  return (
    <FormWrapper onSubmit={handleSubmit(customSubmit)}>
      <div className="row mb-3">
        {form.map((field) => {
          return (
            <div
              className={
                (field.className || "col-sm-6 col-md-6 col-lg-6") + " mb-4"
              }
              key={field.key}
            >
              <div>
                <TextField
                  type={field.type || "text"}
                  defaultValue={
                    field.defaultValue || value ? value[field.key] : ""
                  }
                  InputProps={{ readOnly: field.readOnly }}
                  label={
                    errors[field.key] ? errors[field.key].message : field.label
                  }
                  variant="outlined"
                  className="w-100"
                  error={errors[field.key]}
                  {...register(field.key, field.options)}
                />
              </div>
            </div>
          );
        })}
        <div></div>
      </div>
        <div className="d-flex my-5 justify-content-center">
            <NavLink to="/">
                <Button className="add-and-save">Ortga qaytish</Button>
            </NavLink>

            <Button className="add-and-save" type="submit">
                <FontAwesomeIcon /> Saqlash
            </Button>
        </div>

    </FormWrapper>
  );
};

export default Form;
