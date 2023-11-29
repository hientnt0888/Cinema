// import React from "react";
import { Input, Row, Col } from "antd";
import { useFormik } from "formik";
import * as Y from "yup";
import { signIn } from "../../service/test.service";
import { saveLocal } from "../../util/index";
import { ACCESS_TOKEN } from "../../const/index";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../redux/userSlice";
// import { useAppSelector } from "../../redux/hook";
import { useNavigate } from "react-router-dom";

const validationSchema = Y.object({
    email: Y.string().email().required(),
    password: Y.string().required(),
});


function Sign() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { handleSubmit, getFieldProps } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            console.log(values);
            signIn(values).then((resp) => {
                alert("Đăng nhập thành công")
                navigate("/");
                saveLocal(ACCESS_TOKEN, resp.accessToken);
                dispatch(
                    loginSuccess({
                        email: resp.email,
                    }),
                );
            });
        },
    });

    return (
        <form
            onSubmit={handleSubmit} className="px-16 py-16">
            <Row>
                <Col lg={24}>
                    <label>Email</label>
                    <Input {...getFieldProps("email")} />
                </Col>
                <Col lg={24}>
                    <label>Pass Word</label>
                    <Input {...getFieldProps("password")} />
                </Col>
            </Row>
            <button
                type="submit"
                className="bg-lime-600 text-white px-4 py-2 rounded-2xl mt-4"
            >
                Login

            </button>
        </form>
    );
}

export default Sign;
