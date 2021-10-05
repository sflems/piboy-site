import "./ContactModal.css";
import { db, getEmails } from "../firebase/firebaseConfig";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactModal({ modalToggled, setModalToggled }) {
  const [result, setResult] = useState("");
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => setResult(JSON.stringify(data));

  useEffect(() => {
    // This logs fetched emails from firebase and db info. POST can be added to above onSubmit function.
    console.log(getEmails(), db);
  }, []);

  const styles = {
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#fff",
    zIndex: 1000,
    /* Temporary until hooks and motion ready for conditional display */
    display: modalToggled ? "block" : "none",
  };

  return (
    <div style={styles}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("firstName")} placeholder="First name" />
        <input {...register("lastName")} placeholder="Last name" />
        <select {...register("category")}>
          <option value="">Select...</option>
          <option value="A">Category A</option>
          <option value="B">Category B</option>
        </select>

        <p>{result}</p>
        <input type="submit" />
      </form>
    </div>
  );
}
