import ProductCard from "./ProductCard"
import Test_Orchid from "@/public/assets/images/new_arrival_orchid.jpg";

const ArrivalPlants = [
    {
        plantTitle: "New Plant 1",
        price: "1235",
        image: Test_Orchid

},
{
    plantTitle: "New Plant 2",
    price: "5000",
    image: Test_Orchid

},
{
    plantTitle: "New Plant 3",
    price: "2023",
    image: Test_Orchid

},
]
const NewArrival = () => {
  return (
    <ProductCard orientation="reverse" title="New Arrival" description="Check out the latest and fresh set of greenery!" plants={ArrivalPlants}/>
  )
}

export default NewArrival