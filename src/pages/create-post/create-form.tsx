import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import "./create-form.css";
import { useNavigate } from "react-router-dom";

interface CreateFormData {
  title: string;
  description: string;
}

export default function CreateForm() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    title: yup.string().required("You must add a title."),
    description: yup.string().required("You must add a description."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateFormData>({
    resolver: yupResolver(schema),
  });

  const postsRef = collection(db, "posts");

  const onCreatePost = async (data: CreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid,
    });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onCreatePost)} className="create-form">
      <input
        type="text"
        id="title"
        placeholder="Add a title"
        {...register("title")}
      />
      <p style={{ color: "red" }}>{errors.title?.message}</p>
      <textarea
        id="title"
        placeholder="Add a  description"
        {...register("description")}
      />
      <p style={{ color: "red" }}>{errors.description?.message}</p>

      <input type="submit" className="create-button" />
    </form>
  );
}
