"use client";

import styles from "./page.module.css";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button/Button";
import { LINKS } from "@/constants/links";
import { AUTH_FORM_FIELDS } from "@/constants/authFormFields";
import { TOAST_MESSAGE } from "@/constants/toastMessage";
import { FORM_AUTO_COMPLETE } from "@/constants/formAutoComplete";

const Register = () => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({
          [AUTH_FORM_FIELDS.name]: formData.get(AUTH_FORM_FIELDS.name),
          [AUTH_FORM_FIELDS.email]: formData.get(AUTH_FORM_FIELDS.email),
          [AUTH_FORM_FIELDS.password]: formData.get(AUTH_FORM_FIELDS.password),
        }),
      });

      if (res && !res.error) {
        toast.success(TOAST_MESSAGE.success);
        router.push(LINKS.dashboard.url);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Welcome! Register to continue.</div>
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        autoComplete={FORM_AUTO_COMPLETE.off}
      >
        <input
          type="text"
          name={AUTH_FORM_FIELDS.name}
          placeholder={AUTH_FORM_FIELDS.name}
          className={styles.input}
          required
        />
        <input
          type={AUTH_FORM_FIELDS.email}
          name={AUTH_FORM_FIELDS.email}
          placeholder={AUTH_FORM_FIELDS.email}
          className={styles.input}
          required
        />
        <input
          type={AUTH_FORM_FIELDS.password}
          placeholder={AUTH_FORM_FIELDS.password}
          name={AUTH_FORM_FIELDS.password}
          className={styles.input}
          required
        />
        <Button>Register</Button>
      </form>
      <Link href="/dashboard/login">I have an account</Link>
    </div>
  );
};

export default Register;
