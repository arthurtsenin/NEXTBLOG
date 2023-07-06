"use client";

import styles from "./page.module.css";
import Image from "next/image";
import toast from "react-hot-toast";
import ContactImg from "public/contact.png";
import { CONTACT_FORM_FIELDS } from "@/constants/contactFormFields";
import { FORM_AUTO_COMPLETE } from "@/constants/formAutoComplete";
import { TOAST_MESSAGE } from "@/constants/toastMessage";
import { Button } from "@/components/Button/Button";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      await fetch("/api/message", {
        method: "POST",
        body: JSON.stringify({
          [CONTACT_FORM_FIELDS.name]: formData.get(CONTACT_FORM_FIELDS.name),
          [CONTACT_FORM_FIELDS.email]: formData.get(CONTACT_FORM_FIELDS.email),
          [CONTACT_FORM_FIELDS.message]: formData.get(
            CONTACT_FORM_FIELDS.message
          ),
        }),
      });

      e.target.reset();

      toast.success(TOAST_MESSAGE.success);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div>
      <h1 className={styles.title}>Let`s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={ContactImg}
            sizes="100vw"
            priority={true}
            placeholder="blur"
            alt="Contact banner"
            className={styles.image}
          />
        </div>
        <form
          onSubmit={handleSubmit}
          className={styles.form}
          autoComplete={FORM_AUTO_COMPLETE.off}
        >
          <input
            type="text"
            name={CONTACT_FORM_FIELDS.name}
            placeholder={CONTACT_FORM_FIELDS.name}
            className={styles.input}
            required
          />
          <input
            type={CONTACT_FORM_FIELDS.email}
            name={CONTACT_FORM_FIELDS.email}
            placeholder={CONTACT_FORM_FIELDS.email}
            className={styles.input}
            required
          />
          <textarea
            className={styles.textArea}
            name={CONTACT_FORM_FIELDS.message}
            placeholder={CONTACT_FORM_FIELDS.message}
            cols="30"
            rows="10"
            required
          />
          <Button>send</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
