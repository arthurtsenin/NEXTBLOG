"use client";

import styles from "./page.module.css";
import Link from "next/link";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Loader } from "@/components/Loader/Loader";
import { Button } from "@/components/Button/Button";
import { LINKS } from "@/constants/links";
import { AUTH_STATUS } from "@/constants/authStatus";
import { AUTH_FORM_FIELDS } from "@/constants/authFormFields";
import { TOAST_MESSAGE } from "@/constants/toastMessage";
import { FORM_AUTO_COMPLETE } from "@/constants/formAutoComplete";

const Login = () => {
  const session = useSession();

  if (session.status === AUTH_STATUS.loading) {
    return <Loader />;
  }

  if (session.status === AUTH_STATUS.authenticated) {
    redirect(LINKS.dashboard.url);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      [AUTH_FORM_FIELDS.email]: formData.get(AUTH_FORM_FIELDS.email),
      [AUTH_FORM_FIELDS.password]: formData.get(AUTH_FORM_FIELDS.password),
      redirect: false,
    });

    res && !res.error
      ? toast.success(TOAST_MESSAGE.success)
      : toast.error(res.error);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Hello again! Login to continue.</div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        autoComplete={FORM_AUTO_COMPLETE.off}
      >
        <input
          name={AUTH_FORM_FIELDS.email}
          type={AUTH_FORM_FIELDS.email}
          placeholder={AUTH_FORM_FIELDS.email}
          className={styles.input}
        />
        <input
          name={AUTH_FORM_FIELDS.password}
          type={AUTH_FORM_FIELDS.password}
          placeholder={AUTH_FORM_FIELDS.password}
          className={styles.input}
        />
        <Button>Login</Button>
      </form>
      - OR -
      <Button onClick={() => signIn("google")}>
        <FcGoogle />
        Login with Google
      </Button>
      <Button onClick={() => signIn("github")}>
        <AiFillGithub />
        Login with GitHub
      </Button>
      <Link href={`${LINKS.dashboard.url}/register`}>
        I don`t have an account yet
      </Link>
    </div>
  );
};

export default Login;
