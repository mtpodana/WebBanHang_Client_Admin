import "./style/Login.css";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import AuthService from "./services/AuthService";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./app/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const user = useSelector((state) => state.auth.user);
  console.log("user", user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(`/m`);
  }, [user]);

  const slide = () => {
    const signUpButton = document.getElementById("signUp");
    const signInButton = document.getElementById("signIn");
    const container = document.getElementById("container");

    signUpButton.addEventListener("click", () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener("click", () => {
      container.classList.remove("right-panel-active");
    });
  };
  useEffect(slide);

  const { register, handleSubmit } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    try {
      const res = await AuthService.login(data);
      console.log("Login", res);
      dispatch(login(res.data));
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="container" id="container" style={{ marginTop: "50px" }}>
      <div className="form-container sign-up-container">
        <form className="login-form" action="#">
          <h1>Tạo tài khoản</h1>
          <input className="login-input" type="text" placeholder="Name" />
          <input className="login-input" type="email" placeholder="Email" />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
          />
          <button className="login-btn">Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form
          className="login-form"
          action="#"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1>Đăng nhập</h1>
          <input
            {...register("username")}
            className="login-input"
            type="text"
            placeholder="Email"
          />
          <input
            {...register("password")}
            className="login-input"
            type="password"
            placeholder="Password"
          />
          
          <button className="login-btn">Đăng nhập</button>
          {error && <div >Tên đăng nhập hoặc mật khẩu không đúng</div>}
        </form>
      </div>

      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Chào mừng trở lại!</h1>
            <p>Để tiếp tục liên lạc với chúng tôi vui lòng đăng nhập lại.</p>
            <button className="ghost login-btn" id="signIn">
              Đăng nhập
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Xin chào!</h1>
            <p>
              Nhập thông tin của bạn và tham gia chuyến hành trình của chúng ta.
            </p>
            <button className="ghost login-btn" id="signUp">
              Đăng ký
            </button>
          </div>
        </div>
      </div>
      <script></script>
    </div>
  );
}
export default Login;
