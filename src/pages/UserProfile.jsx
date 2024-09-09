import { useNavigate, useParams } from "react-router-dom";
import styles from "../styles/UserProfile.module.css";

function UserProfile({ post }) {
  console.log(post);
  const { userId, email, phone } = useParams();
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className={styles.containerUserProfile}>
      <div>User id: {userId}</div>
      <h1>{email}</h1>
      <p>{phone}</p>

      <button onClick={handleClick} className={styles.btn}>
        Назад
      </button>
    </div>
  );
}

export default UserProfile;
