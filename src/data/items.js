function validateRequireRate(rate) {
    if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
        throw new Error("require_rate 必須是 1～5 的整數")
    }

    return rate
}

function creatItem({
    id,             // 裝備編號，用於排版或是遍歷用
    require_rate,   // 1~5整數，代表需求度
    rent_or_buy,    // 建議買還是租，也可以是可選
    sport_type,     // 單板或雙板，或是不分單雙
}) {

    return {
        id: "item_" + id,
        require_rate: validateRequireRate(require_rate),
        rent_or_buy: rent_or_buy,
        sport_type: sport_type,
    }
}

const itemList = [
    creatItem({
        id: "snow-jacket",
        require_rate: 5,
        rent_or_buy: "either",
        sport_type: "both"
    }),
    creatItem({
        id: "helmet",
        require_rate: 5,
        rent_or_buy: "rent",
        sport_type: "both"
    }),
    creatItem({
        id: "goggle",
        require_rate: 4,
        rent_or_buy: "either",
        sport_type: "both"
    }),
    creatItem({
        id: "hip-protector",
        require_rate: 4,
        rent_or_buy: "either",
        sport_type: "snowboard"
    }),
    creatItem({
        id: "glove",
        require_rate: 5,
        rent_or_buy: "buy",
        sport_type: "both"
    }),
    creatItem({
        id: "mask",
        require_rate: 3,
        rent_or_buy: "buy",
        sport_type: "both"
    }),
    creatItem({
        id: "snow-pants",
        require_rate: 5,
        rent_or_buy: "either",
        sport_type: "both"
    }),
    creatItem({
        id: "snow-socks",
        require_rate: 3,
        rent_or_buy: "buy",
        sport_type: "both"
    }),
    creatItem({
        id: "knee-pads",
        require_rate: 4,
        rent_or_buy: "either",
        sport_type: "snowboard"
    }),
    creatItem({
        id: "board-and-binding",
        require_rate: 5,
        rent_or_buy: "rent",
        sport_type: "both"
    }),
    creatItem({
        id: "beanie",
        require_rate: 2,
        rent_or_buy: "buy",
        sport_type: "both"
    }),
    creatItem({
        id: "boots",
        require_rate: 5,
        rent_or_buy: "rent",
        sport_type: "both"
    })

]

export { itemList }