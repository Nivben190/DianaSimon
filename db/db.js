import {db} from '../firebase/initFirebase'
import {getDocs, collection, query, where, orderBy, limit} from 'firebase/firestore'
export const getData = async () => {
  const data = await getDocs(collection(db, "Works"));
  return data.docs.map((doc) => doc.data());
}