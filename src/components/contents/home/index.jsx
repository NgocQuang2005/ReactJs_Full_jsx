import React, { useEffect, useRef, useState } from 'react'
import './../../assets/css/home.css'
import Btnout from './button/btn';
import Layout from './../../layout/_layout';
import { Helmet } from 'react-helmet';

const Home = (props) => {
    const [fullname, setfullname] = useState("");

    const handchans = (event) => {
        setfullname(event.target.value);
    };
    const [textColor, setTextColor] = useState("#e57734");
    //================================================================
    const [loadingStatus, setLoadingStatus] = useState('.')
    const [loop, setLoop] = useState()
    useEffect(() => {
        setLoop(setInterval(() => {
            console.log("loading")
            setLoadingStatus(loadingStatus + ".")
        }, 1000))

        return function cleanup() {
            console.log('cleaning up')
            clearInterval(loop)
        }
    }, [])
    //=============================================================
    const { name } = props;

    const information = [
        { name: "thanh truc", age: 36, family: 4 },
        { name: "hoa hien", age: 35, family: 3 },
        { name: "thanh tuan", age: 34, family: 3 },
        { name: "trang van", age: 33, family: 3 },
        { name: "ngoc dung", age: 32, family: 3 }
    ]

    const List = (props) => {
        return <h6 className='text-blue-300'> {props.name} - {props.age} - {props.family}</h6>
    }

    // ==============================nhận button===================================
    // const Butonnn = (props) => {
    //     return (
    //         <button className={props.stylebt}>
    //             <span><i className={props.iconandstyle} ></i></span>
    //             <span>{props.conten}</span>
    //         </button>
    //     )
    // }
    //===============truyền nội dung=================
    const buttonaseet = [
        { stbutton: "stbutton btn1", sticon: " fa-brands fa-facebook text-blue-500 mr-3 ", contents: "Continue with Facebook" },

        { stbutton: "stbutton btn2", sticon: " fa-brands fa-google text-white mr-3", contents: "Continue with Google" }
    ]
    //==============count
    const [count, setcount] = useState(0);

    // const [number, setnumber] = useState(0);
    // const ciusn = useRef(null);
    // useEffect(() =>{
    //     setInterval(() => {//ham của js hàm sẽ là màu vàng
    //         setnumber(number + 1);
    //         ciusn.current.value = number + 1;
    //     }, 1000);// sét 1 giây tăng thêm 1 cái 
    // });

    // const handerchan = () => {
    //     setcount( count - 1 );
    // }
    //==============count
    return (
        <Layout>
            <div className="container mx-auto " >
                <div className='my-6'>
                    {/* <input type="text" ref={ciusn} />

                    <h2>{number}</h2> */}
                    <Helmet>
                        <title>Home</title>
                    </Helmet>
                    <p>
                        {`Loading ${loadingStatus}`}
                    </p>
                    <h2>day la trang home</h2>
                    <i className="fa-brands fa-facebook border-zinc-950 text-blue-500"></i>
                    <i className="fa-brands fa-google"></i>
                    <h4 className='text-[red]'>{name}</h4>
                    <p style={{ color: textColor }}>Welcome to my React App!</p>

                    <button onClick={() => {
                        setTextColor(textColor === "blue" ? "#e57734" : "blue");
                    }} className='bg-black text-white py-1 px-2 hover:bg-red-300 rounded'>click</button>
                    <br />

                    <input type="text" className='border-neutral-700 border' placeholder='nhap ten' onChange={handchans} />

                    <h5 className='text-red-400'>{fullname}</h5>
                    {/* ================ */}
                    {information.map((index) => {
                        return <List name={index.name} age={index.age} family={index.family} />
                    })}
                    {/* =======lặp map ra button========== */}
                    {
                        buttonaseet.map((item) => {
                            return <div className="mb-2"><Btnout stylebt={item.stbutton} iconandstyle={item.sticon} conten={item.contents} /></div>
                        })
                    }

                    <button className='stbutton btn1' onClick={() => setcount(count - 1)}> giảm</button>
                    <p className={count < 10 ? "text-black" : "text-violet-400"}>count: {count}</p>
                    <button className='stbutton btn1' onClick={() => setcount(count + 1)}> tăng</button>
                    {/* <button className="w-[200px] h-[30px] leading-[30px] text-[13px] bg-slate-600 text-white">Continue with Google</button>
            <br />
            <button className="w-[200px] h-[30px] leading-[30px] text-[13px] bg-slate-600 text-white">Continue with Facebook</button> */}

                    <i class="fa-brands fa-facebook"></i>
                    <del>quang</del>
                </div>
            </div>
        </Layout>
    )
}

export default Home