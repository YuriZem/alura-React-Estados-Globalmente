import { useContext } from "react"
import CarrinhoContext from "@/context/carrinhoContext";

export const useCarrinhoContext = () => {
  const {carrinho, setCarrinho} = useContext(CarrinhoContext);
}