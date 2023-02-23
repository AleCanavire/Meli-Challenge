import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import getItems, { getSingleItem, getItemsCategory } from "../services/firestore";

// ========== Responsive Detail ==========
export const useResize = (size) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth > size);

  function updateSize() {
    setWindowSize(window.innerWidth > size);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  return windowSize;
}

// ========== Productos del vendedor ==========
export const GetProducts = () => {
  const { idCategory } = useParams();
  const [products, setProducts] = useState(null);

  async function getItemsAsync() {
    if (idCategory) {
      const response = await getItemsCategory(idCategory);
      setProducts(response);
    } else {
      const response = await getItems();
      setProducts(response);
    }
  }

  useEffect(() => {
    getItemsAsync();
  }, [idCategory ? idCategory : null]);
  
  return products;
}

// ========== Producto del vendedor ==========
export const GetProduct = ()=> {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    async function getItemAsync() {
      getSingleItem(id).then(response => {
        setProduct(response);
        setIsLoading(false)
      })
    }
    getItemAsync();
  }, [id]);
  return{
    product,
    isLoading
  }
}
// ========== Precios ==========
export const priceItem = (productPrice, productCount) => {
  const price = productPrice < 1000 ? Math.trunc(productPrice * 160) : productPrice;
  
  // Cuotas
  const quota = Math.trunc(price / 6).toLocaleString('es-AR');

  // Vendidos
  const solds = Math.trunc(productCount * 2.3);

  return{
    price,
    quota,
    solds
  }
}

// ========== PREGUNTAS ==========
export const useQuestions = () => {
  const [yourQuestions, setQuestions] = useState([]);
  const [oneQuestion, setQuestion] = useState("");

  function onSubmit(e){
    e.preventDefault();
    e.target.reset();
  }
  // Agrega la pregunta al array del state
  function newQuestion(){
    setQuestions([oneQuestion, ...yourQuestions]);
  }
  // Pregunta en el Input
  function onInputChange(e) {
    let oneQuestion = e.target.value;
    let question = {question: oneQuestion}
    setQuestion(question);
  }
  return{
    yourQuestions,
    onSubmit,
    newQuestion,
    onInputChange
  }
}

// ========== OPINIONES ==========
export const useOpinions = (opinions) => {
  // Ocultar menu opiniones
  const [toggle, setToggle] = useState({
    button1: false,
    button2: false
  });
  // Ordenar opiniones por estrellas
  const [reviews, setReviews] = useState(opinions)
  function filterStars(numRate){
    const numStar = opinions.filter(opinion => opinion.rate === numRate);
    const otherStars = opinions.filter(opinion => opinion.rate !== numRate);
    const newArray = numStar.concat(otherStars);
    setReviews(newArray)
  }
  // Todas las reviews ordenadas
  function allReviews() {
    setReviews(reviews.sort((a, b) =>  b.rate - a.rate));
  }
  return{
    toggle,
    setToggle,
    reviews,
    filterStars,
    allReviews
  }
}

export const useSelectImage = () => {
// ===== SELECCIONAR IMAGEN =====
  // Cambiar Imagen
  const [focusImg, setFocusImg] = useState("");
  const [stylePreview, setStylePreview] = useState({
    imageSelected: null,
    objects: [{id:1}, {id:2}, {id:3}, {id:4}]
  });
  // Setear la imagen seleccionada
  function imageActive(index){
    setStylePreview({...stylePreview, imageSelected: stylePreview.objects[index]})
  }
  // Agrega el css a la imagen seleccionada
  function imageStyled(index){
    if (stylePreview.objects[index] === stylePreview.imageSelected) {
      return "selected"
    } return ""
  }
  // Cambia la Imagen Principal
  function changeImage(imageUrl){
    setFocusImg(imageUrl)
  }
  // Resetear imagen al cambiar de producto
  const { id } = useParams();
  useEffect(() => {
    setFocusImg("");
    setStylePreview(state =>({...state, imageSelected: state.objects[0]}))
  }, [id]);
  return{
    focusImg,
    stylePreview,
    imageActive,
    imageStyled,
    changeImage
  }
}

export const scrollToTop = () => {
  window.scrollTo(0, 0);
}