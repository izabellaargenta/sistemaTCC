import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBb611jvV596ukKGiMlIguinoRZ0gmHz9M",
  authDomain: "agrocomercialargenta-a5ac0.firebaseapp.com",
  projectId: "agrocomercialargenta-a5ac0",
  storageBucket: "agrocomercialargenta-a5ac0.appspot.com",
  messagingSenderId: "771871509299",
  appId: "1:771871509299:web:fdee7532bd693fbb344c46",
};

// Initialize Firebase
export default initializeApp(firebaseConfig);

const db = getFirestore();

export const auth = getAuth();

async function lerColecao(colecao) {
  const querySnapshot = await getDocs(collection(db, colecao));
  const items = [];
  querySnapshot.forEach((doc) => {
    const item = doc.data();
    item.id = doc.id;
    items.push(item);
  });
  console.log("items from ler coleção", items);
  return items;
}

export async function lerProdutos() {
  return await lerColecao("produtos");
}

export async function lerVendas() {
  return await lerColecao("vendas");
}

export async function criarProduto(produto) {
  if (!produto.hasOwnProperty("nome")) {
    throw new Error("O nome do produto deve ser fornecido nome");
  }

  if (!produto.hasOwnProperty("preço")) {
    throw new Error("O preço do produto deve ser fornecido");
  }

  if (!produto.hasOwnProperty("quantidade")) {
    throw new Error("O quantidade do produto deve ser fornecida");
  }

  try {
    const novoProduto = {
      nome: produto.nome,
      preço: produto.preço,
      quantidade: produto.quantidade,
      descricao: produto.descricao || "",
    };
    const docRef = await addDoc(collection(db, "produtos"), novoProduto);


    alert(`Produto criado com ID: ${docRef.id}`);

    novoProduto.id = docRef.id;

    return novoProduto;
  } catch (e) {
    console.error(e);
    throw new Error("Não foi possível salvar o produto");
  }
}
