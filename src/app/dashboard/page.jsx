"use client";

import styles from "./page.module.css";
import useSWR from "swr";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { UserPosts } from "@/components/UserPosts/UserPosts";
import { Loader } from "@/components/Loader/Loader";
import { Button } from "@/components/Button/Button";
import { FORM_FIELDS } from "@/constants/formFields";
import { AUTH_STATUS } from "@/constants/authStatus";
import { TOAST_MESSAGE } from "@/constants/toastMessage";
import { FORM_AUTO_COMPLETE } from "@/constants/formAutoComplete";

const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [content, setContent] = useState("");
  const session = useSession();
  const router = useRouter();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, isLoading, mutate } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  if (session.status === AUTH_STATUS.loading) {
    return <Loader />;
  }

  if (session.status === AUTH_STATUS.unauthenticated) {
    setTimeout(() => router?.push("/dashboard/login"), 100);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          [FORM_FIELDS.title]: formData.get(FORM_FIELDS.title),
          [FORM_FIELDS.description]: formData.get(FORM_FIELDS.description),
          [FORM_FIELDS.image]: formData.get(FORM_FIELDS.image),
          [FORM_FIELDS.content]: formData.get(FORM_FIELDS.content),
          [FORM_FIELDS.username]: session.data.user.name,
        }),
      });

      mutate();
      setTitle("");
      setDescription("");
      setImage("");
      setContent("");

      toast.success(TOAST_MESSAGE.success);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
      toast.success(TOAST_MESSAGE.success);
    } catch (error) {
      toast.error(TOAST_MESSAGE.error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`/api/posts/${id}`, {
        method: "GET",
      });
      const data = await res.json();

      setTitle(data.title);
      setDescription(data.description);
      setImage(data.image);
      setContent(data.content);

      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      toast.error(TOAST_MESSAGE.error);
    }
  };

  if (session.status === AUTH_STATUS.authenticated) {
    return (
      <div className={styles.container}>
        <UserPosts
          isLoading={isLoading}
          data={data}
          userName={session?.data?.user.name}
          deleteHandler={handleDelete}
          updateHandler={handleUpdate}
        />
        <form
          className={styles.new}
          onSubmit={handleSubmit}
          autoComplete={FORM_AUTO_COMPLETE.off}
        >
          <h1>{`${session?.data?.user.name}, add new Post !!!`}</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name={FORM_FIELDS.title}
            placeholder={FORM_FIELDS.title}
            className={styles.input}
            required
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            name={FORM_FIELDS.description}
            placeholder={FORM_FIELDS.description}
            className={styles.input}
            required
          />
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            name={FORM_FIELDS.image}
            placeholder={FORM_FIELDS.image}
            className={styles.input}
            pattern={FORM_FIELDS.pattern}
            title="ONLY LINKS STARTS WITH https/http/ftp"
            required
          />
          <textarea
            onChange={(e) => setContent(e.target.value)}
            value={content}
            placeholder={FORM_FIELDS.content}
            name={FORM_FIELDS.content}
            className={styles.textArea}
            cols="30"
            rows="10"
          />
          <Button>Send</Button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
