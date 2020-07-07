import { auth, db} from "../components/firebase/firebase";
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [firebaseUser, setFirebaseUser] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setFirebaseUser(firebaseUser);
        db.collection("user").doc(firebaseUser.uid).get()
        .then(snap => {
          const user = snap.data()
          setUser(user)
        })
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return {
    firebaseUser,
    user
  }
}

export default useAuth;