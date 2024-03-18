import dynamic from "next/dynamic";
import Seo from "../../..//components/common/Seo";
import ShopList from "../../../components/shop/shop-list";

const index = () => {
    return (
        <>
            <Seo pageTitle="Shop List" />
            <ShopList />
        </>
    );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
