import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  //TODO: Change the responsability of handling the form from here!
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      textContent: event.target.textContent.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    alert(`Quotation: R$ ${result.data}`);
  };

  return (
    <div className={styles.contentBox}>
      <form onSubmit={handleSubmit} className={styles.formBox}>
        <label htmlFor="textContent" className={styles.formItem}>
          Paste the text on the area:
        </label>
        <textarea id="textContent" name="textContent" cols={55} rows={10} />
        <button type="submit" className={styles.formItem}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Home;
