import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from "react-hook-form";
import { format } from "date-fns";

export const DateInput = ({ inputInfo, order, control, errors, className }) => {
  return (
    <div className={className?.form}>
      <label htmlFor={inputInfo.id}>
        <b>
          {order}. {inputInfo.label}
        </b>
      </label>

      <Controller
        name={inputInfo.id}
        control={control}
        render={({ field }) => (
          <DatePicker
            {...field}
            selected={field.value ? new Date(field.value) : null} 
            onChange={(date) => {
              field.onChange(date);
            }}
            dateFormat="dd/MM/yyyy"
            placeholderText="dd/mm/yyyy"
          />
        )}
      />

      {errors?.[inputInfo.id] && (
        <i className={className?.errors}>{errors[inputInfo.id].message}</i>
      )}
    </div>
  );
};
