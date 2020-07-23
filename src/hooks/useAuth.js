import { auth, db} from "../components/firebase/firebase";
import { useState, useEffect } from 'react';

const useAuth = () => {
  const [firebaseUser, setFirebaseUser] = useState(false);
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    
    auth.onAuthStateChanged((firebaseUser) => {
      setLoading(true);
      // console.log('Is called', firebaseUser)
      if (firebaseUser) {
        setFirebaseUser(firebaseUser);
        db.collection("user").doc(firebaseUser.uid).get()
        .then(snap => {
          const user = snap.data()
          setUser(user)
          setLoading(false);
          // console.log('elusuario',user)
        })
      } else {
        setFirebaseUser(null);
      }
    });
  }, []);

  return {
    firebaseUser,
    user,
    loading,
  }
}

export default useAuth;