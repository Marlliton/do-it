import { DataProvider } from "../../../core/data";
import { collection, deleteDoc, doc, getDocs, getFirestore, setDoc, updateDoc } from "firebase/firestore";
import { app } from "../../../config/config";

export default class FirebaseDatabase implements DataProvider {
  async save(path: string, data: any, id: string): Promise<void> {
    const db = getFirestore(app);
    const docRef = doc(db, path, id)
    await setDoc(docRef, data.toJson());
  }

  async update(path: string, id: string, attributes: any ): Promise<void> {
    const db = getFirestore(app);
    const docRef = doc(db, path, id);

    await updateDoc(docRef, attributes)
  }

  async delete(path: string, id: string): Promise<void> {
    const db = getFirestore(app);
    const docRef = doc(db, path, id);

    await deleteDoc(docRef);
  }

  async consult(path: string): Promise<any> {
    const db = getFirestore(app);
    const collectionRef = collection(db, path);

    const result = await getDocs(collectionRef);
    return result.docs.map(doc => doc.data()) ?? []
  }
}
