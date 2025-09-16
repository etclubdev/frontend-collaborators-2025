import React from 'react'

export const TextInput = ({ inputInfo, order, register, errors, className }) => {
  return (
    <div className={className.form}>
      <label htmlFor={inputInfo.id}>
        <b>{order}. {inputInfo.label}</b>
      </label>
      <input placeholder={inputInfo.placeholder} type="text" id={inputInfo.id} {...register(inputInfo.id)} />
      {inputInfo.id === "cv_link" && <i className="note-text">* Hãy nhớ mở quyền truy cập bạn nhé!</i>}
      {errors[inputInfo.id] && <i className={className.errors}>{errors[inputInfo.id].message}</i>}
    </div>
  )
}
