import * as yup from "yup";

const gender = {
  male: "Nam",
  female: "Nữ",
  other: "Khác"
};

const department = {
  tech: "Ban Chuyên môn",
  hr: "Ban Nhân sự - Tổ chức",
  pr: "Ban Truyền thông",
  event: "Ban Sự kiện",
  fer: "Ban Tài chính - Đối ngoại"
};

const cv = {
  "cv-template": "CV mẫu",
  "cv-custom": "CV tự thiết kế"
};

export const collaboratorSchema = yup.object().shape({
  full_name: yup
    .string()
    .required("Vui lòng nhập họ và tên."),

  phone_number: yup
    .string()
    .required("Vui lòng nhập số điện thoại.")
    .matches(/^(0|\+84)\d{9,10}$/, "Số điện thoại không hợp lệ."),

  email: yup
    .string()
    .required("Vui lòng nhập email.")
    .email("Định dạng email không hợp lệ.")
    .max(320, "Email không được vượt quá 320 ký tự."),

  dob: yup
    .date()
    .required("Vui lòng chọn ngày sinh.")
    .typeError("Ngày sinh không hợp lệ."),

  gender: yup
    .string()
    .required("Vui lòng chọn giới tính.")
    .transform((value) => gender[value] || value)
    .oneOf(Object.values(gender), "Vui lòng chọn giới tính."),

  student_id: yup
    .string()
    .required("Vui lòng nhập MSSV.")
    .matches(/^\d+$/, "MSSV chỉ được chứa chữ số."),

  faculty: yup
    .string()
    .required("Vui lòng nhập tên khoa."),

  university: yup
    .string()
    .required("Vui lòng nhập tên trường."),

  major: yup
    .string()
    .required("Vui lòng nhập tên ngành."),

  class: yup
    .string()
    .required("Vui lòng nhập lớp."),

  cv_type: yup
    .string()
    .required("Vui lòng chọn loại CV.")
    .transform((value) => cv[value] || value)
    .oneOf(Object.values(cv), "Loại CV không hợp lệ."),

  cv_link: yup
    .string()
    .required("Vui lòng nhập link CV.")
    .url("Đường dẫn CV không hợp lệ."),

  cohort_name: yup
    .string()
    .required("Vui lòng nhập Khóa đào tạo.")
    .matches(/^K\d{1,2}$/, "Khóa phải có định dạng 'Kxx', ví dụ: K49."),

  department_name: yup
    .string()
    .required("Vui lòng chọn tên ban.")
    .transform((value) => department[value] || value)
    .oneOf(Object.values(department), "Vui lòng chọn đúng tên ban."),
});
