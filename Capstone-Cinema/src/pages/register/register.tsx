import React from "react";
import { Input, Col, Row, } from "antd";
import { useState } from "react";
import { useFormik } from "formik";
import * as Y from "yup";
import { signUp } from "src/services";
import { useNavigate } from "react-router-dom";



const validationSchema = Y.object({
  email: Y.string().email("Email không hợp lệ.").required(),
  name: Y.string()
    .min(10, "Không được phép nhỏ hơn 10")
    .max(30, "Không được phép lớn hơn 30")
    .required(),
  passWord: Y.string().min(6).max(50).required(),
  confirmPassWord: Y.string().oneOf([Y.ref("passWord"), null]),
});

export default function Register() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      gender: false,
      passWord: "",
      confirmPassWord: "",
    },

    validationSchema,

    // validate thủ công.
    // validate,
    onSubmit: (values) => {
      // Check errors === undefined hay là một object rỗng thì mới cho phép submit

      // console.log(values);
      // alert(JSON.stringify(values, null, 2));

      // convert
      const payload = {
        email: values.email,
        password: values.passWord,
        gender: values.gender,
        phone: values.phone,
        name: values.name,
      };

      signUp(payload)
        .then(() => {
          navigate("/login");
        })
        .catch((err) => {
          // Nếu có lỗi trả về thì hiển thị lên cho người dùng biết.
          // Hiển thị popup lên
          // alert();
          setErrorSignup({
            isError: true,
            message: "Trùng mail",
          });
        });
    },
  });

  console.log(formik);
  const [errorSignup, setErrorSignup] = useState({
    isError: false,
    message: "",
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className="px-16 py-16">
        <Row gutter={32}>
          <Col lg={12} xs={24}>
            <label htmlFor="taiKhoan">Tài khoản</label>
            <Input id="taiKhoan" />

            <label htmlFor="matKhau">Mật khẩu</label>
            <Input id="matKhau" {...formik.getFieldProps("passWord")} />
            {formik.touched.passWord && formik.errors.passWord && (
              <p className="text-red-600 text-xl">{formik.errors.passWord}</p>
            )}

            <label htmlFor="maNhom">Mã nhóm</label>
            <Input id="maNhom" />
          </Col>
          <Col lg={12} xs={24}>
            <label htmlFor="hoTen">Họ tên</label>
            <Input id="hoTen" {...formik.getFieldProps("name")} />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-600 text-xl">{formik.errors.name}</p>
            )}
            <label htmlFor="email">Email</label>
            <Input id="email" {...formik.getFieldProps("email")} />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-600 text-xl">{formik.errors.email}</p>
            )}
            <label htmlFor="soDt">Số điện thoại</label>
            <Input id="soDt" {...formik.getFieldProps("phone")} />
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-600 text-xl">{formik.errors.phone}</p>
            )}
          </Col>
        </Row>
        <button
          type="submit"
          className="btn btn-warning text-black-700 bg-[#007bff] px-[1.1rem] text-2xl my-10"
        >
          Register
        </button>
      </form>
    </div>
  );
}
