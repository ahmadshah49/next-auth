import CardsData from "./components/dashborad";
import DashboradLayout from "./DashboradLayout";
import prisma from "../config/prisma";

// Get All Products
const fetchProductsData = async () => {
  try {
    const FetchProducts = await prisma.addProducts.findMany();
    return FetchProducts;
  } catch (error) {
    console.log("Error Fetching Products", error);
  }
};

// Get All Visitors
const fetchVisitorsData = async () => {
  try {
    const FetchVisitors = await prisma.addVistors.findMany();
    return FetchVisitors;
  } catch (error) {
    console.log("Error Fetching Products", error);
  }
};

const page = async () => {
  const products = await fetchProductsData();
  const vistors = await fetchVisitorsData();
  return (
    <DashboradLayout>
      <CardsData productsData={products} vistorsData={vistors} />
    </DashboradLayout>
  );
};

export default page;
