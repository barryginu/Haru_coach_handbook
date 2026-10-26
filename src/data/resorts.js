
function parseCoordinates(coordinates) {
    const [latitude, longitude] = coordinates
        .split(",")
        .map((value) => Number(value.trim()))

    return { latitude, longitude }
}

function createResort(
    name,       // 雪場名稱
    area,       // 地區
    coordinate  // 座標，純文字，從google map直接抓，所以會連在一起
) {
    const { latitude, longitude } = parseCoordinates(coordinate)

    return {
        name: name,
        area: area,
        coordinate: coordinate,
        latitude: latitude,
        longitude: longitude
    }
}

const resorts = [
    createResort(
        "岩原",
        "湯澤",
        "36.938374005495795, 138.84164910456158"
    ),
    createResort(
        "神樂",
        "湯澤",
        "36.860448088677416, 138.72672365672184"
    ),
    createResort(
        "八方尾根",
        "白馬",
        "36.702147508149075, 137.83701969844793"
    ),
    createResort(
        "Sanosaka",
        "白馬",
        "36.62937689288084, 137.84192643284177"
    )
]

export { resorts }
