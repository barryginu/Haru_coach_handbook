function creatItem(
    id,             // 裝備編號，用於排版或是遍歷用
    name,           // 裝備名稱
    required,       // 是可選還是必須
    rent_or_buy,    // 建議買還是租，也可以是可選
    sport_type,     // 單板或雙板，或是不分單雙
    description,    // 關於裝備的簡單描述
    suggestion      // 我的建議
) {

    return {
        id: "item_" + id,
        name: name,
        required: required,
        rent_or_buy: rent_or_buy,
        sport_type: sport_type,
        description: description,
        suggestion: suggestion
    }
}

const itemList = [
    creatItem(
        "snow-jacket",
        "雪衣",
        true,
        "either",
        "both",
        "防水、防風、透氣，舒適合身為主，好看為輔",
        "若不介意的話可以用租借的較省錢，若有預算且未來可能會持續滑雪可考慮投資"
    ),
    creatItem(
        "helmet",
        "安全帽",
        true,
        "rent",
        "both",
        "保護頭部，減少撞擊傷害，大小合適，貼合頭型，無破損",
        "不好攜帶，建議提前找好可租借的店家"
    ),
    creatItem(
        "goggle",
        "雪鏡",
        true,
        "either",
        "both",
        "防風、防雪、抗紫外線，提升雪地能見度與安全，盡量選擇有防霧處裡的雪鏡",
        "貼合臉型很重要，若不是預算特別吃緊可考慮購買"
    ),
    creatItem(
        "hip-protector",
        "防摔褲",
        true,
        "either",
        "單板",
        "保護臀部、尾椎，減少摔倒時的衝擊",
        "穿上後會有厚度，可能影響雪褲尺寸要特別注意，若租的到可用租的，若租不到建議購買"
    ),
    creatItem(
        "glove",
        "手套",
        true,
        "buy",
        "both",
        "保暖、防水、耐磨，保護雙手避免寒冷與摔傷",
        "可以買自己喜歡的，記得要是雪地可用~"
    )
]

export { itemList }