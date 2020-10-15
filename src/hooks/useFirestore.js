import { useState, useEffect } from "react";
import { firestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let documents = [];
        snapshot.forEach((doc) =>
          documents.push({ ...doc.data(), id: doc.id })
        );
        setDocs(documents);
      });
    return () => unsubscribe();
  }, [collection]);

  return { docs };
};

export default useFirestore;
