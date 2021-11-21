import "./ContactModal.css";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useForm } from "react-hook-form";

export default function ContactModal({ setModalToggled }) {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      // eslint-disable-next-line
      const docRef = await addDoc(collection(db, "emails"), {
        delivery: null,
        message: {
          html: `From: ${data.name}<br />
                  Telephone: ${data.tel}<br />
                  Company: ${data.company}<br />
                  Message: ${data.message}`,
          subject: "New Submission from Piboy.ca",
        },
        to: ["scott@piboy.ca"],
        replyTo: [data.email],
      });
      setModalToggled(false);
      alert(
        "Message sent. Thank you for your interest. We'll get back to you shortly!"
      );
    } catch (e) {
      console.error(`Error adding document: ${e}`);
      alert(`Whoops! Something went wrong with your submission. (ERROR: ${e})`);
    }
  };

  return (
    <div id="contactModal" className="container-fluid m-0 p-0">
      <div className="row m-0 py-4">
        <div className="col-2 pt-1"></div>
        <div className="col-8 my-auto">
          <h4 className="mb-0 text-center">Let's Get in Touch</h4>
        </div>
        <div className="col-2 pt-1 pe-4 text-end">
          <button
            className="btn btn-outline fs-1 text-danger"
            onClick={() => setModalToggled(false)}
          >
            {" "}
            X{" "}
          </button>
        </div>
      </div>
      <div id="contactModalContainer" className="container m-0 -0 mx-auto">
        <div className="row">
          <div className="col"></div>
          <div className="col-10 col-lg-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Name
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="nameHelp"
                  {...register("name", { required: true, maxLength: 80 })}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon2">
                  Email
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  {...register("email", {
                    required: true,
                    maxLength: 64,
                    pattern: /^\S+@\S+\.\S+$/i,
                  })}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon3">
                  Tel.
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Telephone"
                  {...register("tel", {
                    required: true,
                    minLength: 6,
                    maxLength: 12,
                  })}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon4">
                  Company
                </span>
                <input
                  type="text"
                  className="form-control"
                  aria-label="Company"
                  {...register("company", { maxLength: 64 })}
                />
              </div>
              <div className="input-group mb-3">
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  placeholder="Message or inquiry..."
                  {...register("message", { required: true, maxLength: 1000 })}
                ></textarea>
              </div>
              <div className="mb-3 p-1 form-check d-flex">
                <input
                  type="checkbox"
                  className="form-check-input align-self-center col-auto ms-2 me-4 my-auto"
                  id="exampleCheck1"
                  {...register("agreeCheck", { required: true })}
                />
                <label
                  className="form-check-label small"
                  htmlFor="exampleCheck1"
                >
                  <span>
                    {" "}
                    By using this form, you agree with the storage and handling
                    of your data in accordance with our <a className="link-success" href="/privacy">Privacy Policy</a>. This
                    site is also protected by reCAPTCHA and the Google{" "}
                  </span>
                  <a className="link-success" href="https://policies.google.com/privacy">
                    Privacy Policy
                  </a>
                  <span> and </span>
                  <a className="link-success" href="https://policies.google.com/terms">
                    Terms of Service
                  </a>
                  <span> apply.</span>
                </label>
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-success btn-lg">
                  Submit
                </button>
              </div>
            </form>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}
