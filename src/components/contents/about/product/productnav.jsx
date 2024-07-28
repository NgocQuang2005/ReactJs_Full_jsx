
import anh1 from '../../../assets/images/day1.jpeg'
import anh2 from '../../../assets/images/day2.jpeg'
import anh3 from '../../../assets/images/lbg1.jpeg'
import anh4 from '../../../assets/images/lbg2.jpeg'
import anh5 from '../../../assets/images/lbg3.jpeg'
import anh6 from '../../../assets/images/lbg4.jpeg'
import anh7 from '../../../assets/images/moto1.jpeg'

export const ProductNav = [
    {id: 1 , imgpd: anh1 , shopname: "NGỌC QUANG" , curenpr: "240" , prices: "300" , progss: "30", pr: 4, namepd: "Dày của Goat L.Messi quá đẹp , đáng mua .." },

    {id: 2 , imgpd: anh2 , shopname: "NGỌC SÁNG" ,pr: 2, curenpr: "160" , prices: "220" ,progss: "62", namepd: "Đôi dày đá bóng siêu đẹp vừa ra mắt năm 2024.." },

    {id: 3 , imgpd: anh3 , shopname: "nquangg" ,pr: 2, curenpr: "16000" , prices: "19500" ,progss: "52", namepd: "Lambogini đời mới sản xuất năm 2024 tại Mỹ (Tho)" },

    {id: 4 , imgpd: anh4 , shopname: "nquangg" ,pr: 3, curenpr: "18700" , prices: "21300" ,progss: "63", namepd: "Lambogini guliass đời mới sản xuất năm 2024 tại Anh , mang phong cách sang trọng " },

    {id: 5 , imgpd: anh5 , shopname: "Tryccc" ,pr: 4, curenpr: "50000" , prices: "65000" ,progss: "22", namepd: "Lambogini 2024 là chiếc xe chạy bằng cơm..." },

    {id: 6 , imgpd: anh6 , shopname: "L.Messi" ,pr: 3, curenpr: "10000" , prices: "13500" ,progss: "82", namepd: "Chiếc siêu xe của siêu sao , Goat L.Messi..." },

    {id: 7 , imgpd: anh7 , shopname: "nquangg" ,pr: 3, curenpr: "3000" , prices: "3500" ,progss: "19", namepd: "Chiếc moto cảu n.quangg là 1 chiếc xe rất đắt đỏ " }
]
export const rattingStart = (r) => {
    const foo = [];
    const fill = [];
    for (let i = 0; i < r; i++) {
        foo.push(<i  className="fa-solid fa-star text-yellow-400"></i>);
    }
    for (let i = 0; i < (5 - r); i++) {
        fill.push(<i  className="fa-regular fa-star fill-yellow-400"></i>);
    }
    return [...foo, ...fill];
};
