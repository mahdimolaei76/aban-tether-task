import React, { useState } from "react";
import IconButton from "../../components/iconButton/IconButton";
import IconInput from "../../components/iconInput/IconInput";
import SimpleButton from "../../components/simpleButton/SimpleButton";
import LabelCheckbox from "../../components/labelCheckbox/LabelCheckbox";

import userIcon from "../../assets/icons/user.png";
import mailIcon from "../../assets/icons/mail.png";
import passwordIcon from "../../assets/icons/password.png";
import facebookIcon from "../../assets/icons/facebook.png";
import googleIcon from "../../assets/icons/google.png";

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const toggleMode = () => {};
  const clickExternalLogin = () => {};
  return (
    <div className="form--container h-4/5 w-container m-auto bg-white">
      <form>
        <SimpleButton text={"ثبت‌نام"} onClick={toggleMode} />
        <div className="form--container__rows w-full">
          <IconInput
            iconSrc={userIcon}
            label="نام کاربری"
            name="username"
            value={username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.name)}
          />
        </div>
        <div className="form--container__rows w-full">
          <IconInput
            iconSrc={mailIcon}
            label="آدرس ایمیل"
            name="email"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.name)}
          />
        </div>
        <div className="form--container__rows w-full">
          <IconInput
            iconSrc={passwordIcon}
            label="رمز عبور"
            name="password"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.name)}
          />
        </div>
        <div className="form--container__rows w-full">
          <IconButton text={"ورود با فیسبوک"} onClick={clickExternalLogin} iconSrc={facebookIcon} />
        </div>
        <div className="form--container__rows w-full">
          <IconButton text={"ورود با گوگل"} onClick={clickExternalLogin} iconSrc={googleIcon} />
        </div>
        <div className="form--container__rows w-full">
          <LabelCheckbox
            value={acceptTerms}
            onClick={() => setAcceptTerms(!acceptTerms)}
            name="acceptTerms"
            label={"قوانین و مقررات برای ثبت‌نام را میپذیرم"}
          />
        </div>
      </form>
    </div>
  );
};

export default Register;
