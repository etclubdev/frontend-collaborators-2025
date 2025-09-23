import React from 'react'

export const TextInput = ({ inputInfo, order, register, errors, className }) => {
  return (
    <div className={className.form}>
      <label htmlFor={inputInfo.id}>
        <b>{order}. {inputInfo.label}</b>
      </label>
      <input placeholder={inputInfo.placeholder} type="text" id={inputInfo.id} {...register(inputInfo.id)} />
      {inputInfo.id === "cv_link" && 
        <i className="note-text">
          <u><b>Lưu ý</b></u><br />
          <ul>
            <li>Link bộ câu hỏi và CV mẫu sẽ xuất hiện ngay dưới ban ứng tuyển được chọn</li>
            <li>Hãy nhớ mở quyền truy cập bạn nhé!</li>
          </ul>
        </i>
      }
      {errors[inputInfo.id] && <i className={className.errors}>{errors[inputInfo.id].message}</i>}
    </div>
  )
}
