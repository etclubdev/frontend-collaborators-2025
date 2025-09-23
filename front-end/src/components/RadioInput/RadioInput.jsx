import { useState } from "react";

export const RadioInput = ({ inputInfo, order, register, errors, className }) => {
    const isDepartmentRadio = inputInfo.id === "department_name";

    const [selectedId, setSelectedId] = useState(null);

    const handleChange = (e) => {
        setSelectedId((prev) => {
            const selected = `radio-label-${e.target.value}`;

            if (prev) {
                const lastSelectedInputEle = document.getElementById(prev);
                lastSelectedInputEle.classList.remove("label-selected");
            }

            if (selected) {
                const selectedInputEle = document.getElementById(selected);
                selectedInputEle.classList.add("label-selected");
                return selected;
            }
        });
    };

    console.log(inputInfo.options);
    
    return (
        <div className={className.form}>
            <label className="radio-label">
                <b>{order}. {inputInfo.label}</b>
            </label>
            <div className={`${className.form}-container`}>
                {inputInfo.options.map(item => (
                    <label id={`radio-label-${item.id}`} key={item.id} htmlFor={`radio-${item.id}`}>
                        <input
                            type="radio"
                            id={`radio-${item.id}`}
                            value={item.id}
                            {...register(inputInfo.id)}
                            onChange={handleChange}
                        />
                        <span className="radio-value">
                            {item.label}
                            {isDepartmentRadio && (
                                <>
                                    <br />
                                    <i>
                                        <b>
                                            <span className="department-link">
                                                <span style={{ color: "red" }}>*</span>
                                                {"Truy cập đường link sau để lấy bộ câu hỏi và CV mẫu:  "}
                                                <a target="_blank" rel="noopener noreferrer" href={item.link || ""} style={{ color: "rgba(221, 131, 224, 0.80) " }}>LINK</a>
                                            </span>
                                        </b>
                                    </i>
                                </>
                            )}
                        </span>
                    </label>
                ))}
            </div>

            {errors[inputInfo.id] && (
                <i className={className.errors}>
                    {errors[inputInfo.id].message}
                </i>
            )}
        </div>
    );
};
