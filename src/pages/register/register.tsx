import React, { useState } from "react";
import IconButton from "../../components/iconButton/IconButton";
import IconInput from "../../components/iconInput/IconInput";
import LabelCheckbox from "../../components/labelCheckbox/LabelCheckbox";
import ToggleButton from "../../components/toggleButton/ToggleButton";
import userIcon from "../../assets/icons/user.png";
import mailIcon from "../../assets/icons/mail.png";
import passwordIcon from "../../assets/icons/password-lock.jpg";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";
import SimpleButton from "../../components/simpleButton/SimpleButton";

import { validateUsername, validateEmail, validatePassword } from "../../utils/validations";
import "./register.styles.scss";

const toggleOptions = [
  {
    value: "login",
    label: "ورود"
  },
  {
    value: "signUp",
    label: "ثبت‌نام"
  }
];
const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [formMode, setFormMode] = useState(toggleOptions[0].value);
  const [usernameValidation, setUsernameValidation] = useState(false);
  const [emailValidation, setEmailValidation] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const clickExternalLogin = () => {};
  return (
    <div className="form--container w-container m-auto bg-white rounded-lg pt-4 relative">
      <form>
        <div className="form--container__rows full-row mb-2">
          <ToggleButton
            options={toggleOptions}
            selectedOptions={formMode}
            onClick={() => {
              if (formMode === toggleOptions[0].value) setFormMode(toggleOptions[1].value);
              if (formMode === toggleOptions[1].value) setFormMode(toggleOptions[0].value);
            }}
          />
        </div>
        <div className="form--container__rows full-row">
          <IconInput
            iconSrc={userIcon}
            label="نام کاربری"
            name="username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
              setUsernameValidation(validateUsername(e.target.value));
            }}
          />
        </div>
        <div className="form--container__rows full-row">
          <IconInput
            iconSrc={mailIcon}
            label="آدرس ایمیل"
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(e.target.value);
              setEmailValidation(validateEmail(e.target.value));
            }}
          />
        </div>
        <div className="form--container__rows full-row">
          <IconInput
            iconSrc={passwordIcon}
            label="رمز عبور"
            name="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPassword(e.target.value);
              setPasswordValidation(validatePassword(e.target.value));
            }}
            type="password"
          />
        </div>
        <div className="form--container__rows full-row">
          <IconButton
            text={"ورود با فیسبوک"}
            onClick={clickExternalLogin}
            iconSrc={facebookIcon}
            imgStyle={{ width: "13px", heigt: "20px" }}
          />
        </div>
        <div className="form--container__rows full-row">
          <IconButton text={"ورود با گوگل"} onClick={clickExternalLogin} iconSrc={googleIcon} />
        </div>
        <div className="form--container__rows full-row">
          <LabelCheckbox
            value={acceptTerms}
            onClick={() => setAcceptTerms(!acceptTerms)}
            name="acceptTerms"
            label={"قوانین و مقررات برای ثبت‌نام را میپذیرم"}
          />
        </div>
        <SimpleButton
          style={{
            position: "absolute",
            bottom: "-22px",
            left: "50%",
            transform: "translateX(-50%)"
          }}
          onClick={() => {
            if (usernameValidation && emailValidation && passwordValidation && acceptTerms)
              alert("Requst need to send!");
          }}
          text="ثبت‌نام"
          disabled={!usernameValidation || !emailValidation || !passwordValidation || !acceptTerms}
        />
      </form>
    </div>
  );
};

export default Register;
