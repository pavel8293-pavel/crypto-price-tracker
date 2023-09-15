import { NormalizedCoinEntity, UpdatedNormalizedCoinEntity } from "./interfaces";

const MAX_COINS_COUNT = 32;

export const transformCoinData = (
    coins: NormalizedCoinEntity
): { transformedCoins: UpdatedNormalizedCoinEntity; coinsKeys: string[] } => {
    const coinsKeys: string[] = Object.keys(coins).slice(0, MAX_COINS_COUNT);
    const transformedCoins = {} as UpdatedNormalizedCoinEntity;
    coinsKeys.forEach(
        key =>
            (transformedCoins[key] = {
                id: coins[key].Id,
                url: coins[key].Url,
                imageUrl: coins[key].ImageUrl,
                name: coins[key].Name,
                coinName: coins[key].CoinName,
                fullName: coins[key].FullName,
                description: coins[key].Description,
            })
    );

    return {
        transformedCoins,
        coinsKeys,
    };
};
