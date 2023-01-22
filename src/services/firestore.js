// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	doc,
	getDocs,
	getDoc,
	query,
	where,
  addDoc,
  orderBy
} from "firebase/firestore";
import products from "../data/data";
import stitchProduct from "../data/stitchProduct";

const firebaseConfig = {
	apiKey: "AIzaSyDZ8-yNA2TenqXCmGu5QIXRm9cjlYpFPJ0",
	authDomain: "clonmeli.firebaseapp.com",
	projectId: "clonmeli",
	storageBucket: "clonmeli.appspot.com",
	messagingSenderId: "831188771191",
	appId: "1:831188771191:web:ba2ec71b9381254df18172"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

export default async function getItems() {
	const collectionProducts = collection(DB, "products");
  const q = query(collectionProducts, orderBy("index"))
	const documentSnapshot = await getDocs(q);

	const documentsData = documentSnapshot.docs.map( doc => {
		return{
			...doc.data(),
			id: doc.id
		}
	})
	return documentsData;
}

export async function getSingleItem(idParams) {
	const docRef = doc(DB, "products", idParams);
	const docSnapshot = await getDoc(docRef);
	return{
		...docSnapshot.data(),
		id: docSnapshot.id
	}
}

export async function getItemsCategory(idCategory) {
	const collectionRef = collection(DB, "products");
	const queryCategory = query(collectionRef, where("category", "==", idCategory));

	const documentSnapshot = await getDocs(queryCategory);

	const documentsData = documentSnapshot.docs.map( doc => {
		return{
			...doc.data(),
			id: doc.id
		}
	})
	return documentsData;
}

export async function createOrder(order) {
  const collectionRef = collection(DB, "orders");
  const docOrder = await addDoc(collectionRef, order);
  return(docOrder.id)
}

// exportar productos a firebase
async function exportArrayToFirestore() {
  const collectionRef = collection(DB, "products")

  for (const product of products) {
    product.index = product.id;
    delete product.id;
    let docOrder = await addDoc(collectionRef, product);
  }
}

async function exportItemToFirestore() {
  const collectionRef = collection(DB, "products")
  delete stitchProduct.id;
  let docOrder = await addDoc(collectionRef, stitchProduct);
}