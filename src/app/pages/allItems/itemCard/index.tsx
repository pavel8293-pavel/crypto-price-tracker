import { ItemEntity } from "../../../interfaces";
import { Card } from "../../../components/card";
import CardContent from "./content/card";
import DialogContent from "./content/dialog";
import Dialog from "../../../components/dialog";
import { useState } from "react";

const ItemCard = (props: ItemEntity) => {
    const [isOpened, setIsOpened] = useState(false);

    const onCloseDialog = () => setIsOpened(false);
    const onOpenDialog = () => setIsOpened(true);

    return (
        <>
            <Card onClick={onOpenDialog}>
                <CardContent {...props} />
            </Card>
            <Dialog handleClose={onCloseDialog} isOpened={isOpened} dialogTitle={props.name}>
                <DialogContent {...props} />
            </Dialog>
        </>
    );
};

export default ItemCard;
