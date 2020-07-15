import { auth, db} from "../components/firebase/firebase";
import { useState, useEffect } from 'react';

/**
 * 1-  Usar un mecanismo para identificar cuando el usuario fue cargado, algo como
 *     un loading state.
 * 2.- Abstraer la lógica de autenticación en nuestra app fuera de un componente.
 */
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