import { CoinEntity } from "../../../interfaces";
import { Card } from "../../../components/card";
import CoinInfo from "../../../components/coinInfo";

const ItemCard = (props: CoinEntity) => {
    return (
        <Card>
            <CoinInfo {...props} />
        </Card>
    );
};

export default ItemCard;
