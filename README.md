### Lệnh Chạy
 yarn start

### Lệnh Tạo Bố Cục
 rafce
các hàm setInterval ==> `hàm xét thời gian`
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

###  chọn tất cả các cái mình bôi đen giống nhau
    ctrl shift L
### `Thẻ Link` là của react_router_dom sử dụng để chuyển trang

### bắt đầu khởi tạo 1 dự án react js

////////////////////////////////

### `KHỞI TẠO DỰ ÁN REACT JS`

### 1, 
    npx create-react-app 

### 2, cài thư viện tailwind 
    npm install -D tailwindcss 
    npx tailwindcss init 
### ở tệp tailwin.config thêm 
    content: ["./src/**/*.{html,js,jsx,ts,tsx}",],

### 2, vào index.css ném cái này vào 
    @tailwind base; 
    @tailwind components; 
    @tailwind utilities;
### cài các gói phụ thuộc 
    yarn add tailwindcss postcss autoprefixer
### 2, ở package.json tìm đến chỗ có cái này vào sửa :

    "devDependencies": {
    "autoprefixer": "^10.4.19",
    "postcss": "^8.4.39",
    "tailwindcss": "^3.4.6"
    }

### 2, chạy lại 1 lần nữa 
    yarn add postcss autoprefixer --dev

### 3, cài đặt dom 
    npm install react-router-dom
=> cài cái này rồi mới làm được phân trang

### 4, cài đặt fontawesome ném link này vào chỗ index.html ở public:

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />

=> do kh thể sử dụng cài được nên hãy dùng link:))

### 5, cài react_query 
    yarn add @tanstack/react-query 
=> `QueryClient` và `QueryClientProvider` hai cái này nhiệm vụ là bao bọc cái router của `react_router_dom ` để chuyển trang => `QueryClient` và `QueryClientProvider` được sử dụng để thiết lập context cho các truy vấn. => và có 1 cái nữa là `useQuery` được sử dụng để fetch và quản lý dữ liệu từ API.

### 6, cài đặt react-helmet 
    yarn add react-helmet

=> react-helmet là một thư viện React dùng để quản lý thay đổi các thành phần <head> trong tài liệu HTML của bạn, chẳng hạn như tiêu đề trang, meta tags, và các thuộc tính khác. Điều này rất hữu ích cho việc tối ưu hóa SEO và quản lý metadata một cách dễ dàng trong các ứng dụng React.

### Ví dụ : Ví dụ đang ở trang home , mình muốn đặt tiêu đề phải là như sau =>

    <Helmet>
      <title>Đây là trang Home</title>
    </Helmet>

### 7, cài react-hook-form 
    yarn add react-hook-form

=> nó sẽ để quản lý các form 1 cách hiệu quả Nó cung cấp các hook để xử lý việc validate, submit, và quản lý trạng thái của các input fields trong form một cách dễ dàng mà không cần phải sử dụng các component class.

### Chức Năng:

CÁC TÍNH NĂNG CHÍNH CỦA react-hook-form:
HIỆU NĂNG CAO: react-hook-form giảm thiểu số lần render lại không cần thiết, giúp form hoạt động mượt mà hơn.
DỄ SỬ DỤNG: Cung cấp các API đơn giản và trực quan.
TÍCH HỢP DỄ DÀNG: Dễ dàng tích hợp với các thư viện và framework khác như Yup, Zod, và Material-UI.
HỖ TRỢ MẠNH MẼ CHO validation: Cung cấp nhiều tùy chọn để validate các input fields.

### Ví dụ :

    // RegistrationForm.js
    import React from 'react';
    import { useForm } from 'react-hook-form';

    const RegistrationForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("username")); // Theo dõi giá trị của input field "username"

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label>Username</label>
            <input {...register("username", { required: true })} />
            {errors.username && <span>This field is required</span>}
        </div>

        <div>
            <label>Email</label>
            <input {...register("email", {
            required: true,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Invalid email address"
            }
            })} />
            {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
            <label>Password</label>
            <input type="password" {...register("password", { required: true })} />
            {errors.password && <span>This field is required</span>}
        </div>

        <input type="submit" />
        </form>
    );
    }

    export default RegistrationForm;

### 8, Có thể cài 
    yarn add redux
    yarn add react-redux
=> cài 2 lệnh này .. mục đích của `react-redux` Redux là một thư viện quản lý state, giúp bạn lưu trữ và quản lý trạng thái của ứng dụng một cách có tổ chức và dễ dự đoán.

### 9, Cài thử viên react-slick 
    yarn add react-slick slick-carousel 
=> Thêm file css cho nó ở trong trang mà cần dùng đến
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

### Ví dụ:

    // SliderComponent.js
    import React from 'react';
    import Slider from 'react-slick';
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    const SliderComponent = () => {
    const settings = {
        dots: true, // Hiển thị các chấm chỉ số
        infinite: true, // Chạy vô hạn
        speed: 500, // Tốc độ chuyển đổi
        slidesToShow: 1, // Số lượng slide hiển thị mỗi lần
        slidesToScroll: 1 // Số lượng slide di chuyển mỗi lần
    };

    return (
        <div>
        <h2> Simple Slider</h2>
        <Slider {...settings}>
            <div>
            <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
            </div>
            <div>
            <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
            </div>
            <div>
            <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
            </div>
            <div>
            <img src="https://via.placeholder.com/800x400?text=Slide+4" alt="Slide 4" />
            </div>
        </Slider>
        </div>
    );
    }

    export default SliderComponent;

### hãy tham khảo thêm ở trên gg search 
    react-slicks

### 10, Cài swiper để dùng slider nữa cug dc 
    yarn add swiper

### Ví dụ:

    // SliderComponent.js
    import React from 'react';
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

    import { Swiper, SwiperSlide } from "swiper/react";
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';
    import 'swiper/css';

    const SliderComponent = () => {
    return (
        <div style={{ width: '80%', margin: 'auto', padding: '20px' }}>
        <h2>Swiper Slider Example</h2>
        <Swiper
            spaceBetween={50} // Khoảng cách giữa các slide
            slidesPerView={1} // Số lượng slide hiển thị mỗi lần
            navigation // Hiển thị các nút điều hướng
            pagination={{ clickable: true }} // Hiển thị phân trang và cho phép nhấp vào phân trang
            loop // Lặp lại slider khi đến cuối
        >
            <SwiperSlide>
            <img src="https://via.placeholder.com/800x400?text=Slide+1" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://via.placeholder.com/800x400?text=Slide+2" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://via.placeholder.com/800x400?text=Slide+3" alt="Slide 3" />
            </SwiperSlide>
            <SwiperSlide>
            <img src="https://via.placeholder.com/800x400?text=Slide+4" alt="Slide 4" />
            </SwiperSlide>
        </Swiper>
        </div>
    );
    };

    export default SliderComponent;

### Rồi mình import ra ở trang mình cần chạy là chạy nó

### 11, Cài zustand 
    yarn add zustand 
=> `zustand` là một thư viện quản lý state (trạng thái) cho các ứng dụng React. Nó cung cấp một API đơn giản và hiệu quả để quản lý và chia sẻ trạng thái giữa các component mà không cần phải sử dụng các phương pháp quản lý state phức tạp hơn như Redux.

### Các Tính Năng Chính:
Nhẹ và nhanh: zustand rất nhẹ và hiệu quả trong việc quản lý trạng thái.
Dễ sử dụng: Cung cấp một API đơn giản và dễ hiểu, không cần boilerplate code phức tạp.
Tích hợp dễ dàng: Có thể dễ dàng tích hợp vào các ứng dụng React hiện tại mà không cần thay đổi cấu trúc hiện tại của ứng dụng.
Tính năng immer tích hợp sẵn: Hỗ trợ cập nhật state theo kiểu không thay đổi (immutable) nhờ vào immer.

### Ví Dụ :

### `Tạo 1 hàm store `

    // store.js
    import create from 'zustand';

    const useStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),
    }));

    export default useStore;

### Cái này để click tăng count ..

### Đưa ra trang cần chạy

    // Counter.js
    import React from 'react';
    import useStore from './store';

    const Counter = () => {
    const { count, increase, decrease } = useStore();

    return (
        <div>
        <h1>Count: {count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        </div>
    );
    };

    export default Counter;

### 12, .....

### Đang Cập Nhật Thêm....

### Cấu trúc của file `app.jsx` khi sử dụng react_router_dom

### Lưu ý : `Trong reactjs muốn lấy ảnh ra cũng phải import , nên đặt tên để lấy ảnh ra.`

### =>

    import './App.css';
    import { BrowserRouter, Routes, Route } from 'react-router-dom'
    import {
    QueryClient,
    QueryClientProvider,
    } from '@tanstack/react-query'
    import Home from './components/contents/home';
    import About from './components/contents/about';
    import Contact from './components/contents/contact';

    const queryClient = new QueryClient()
    function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <Routes>
            <Route path='' element={<Home />} />
            <Route path='/Home' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            </Routes>
        </BrowserRouter>
        </QueryClientProvider>
    );
    }

    export default App;

### Đây là cấu trúc của app

### css : 1 thẻ div hoặc các thẻ nào trong html muốn chỉ xuất hiện cái đó trong bao nhiêu dòng , và nếu quá số dòng thì sẽ ... thì dưới đây là đoạn css:
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
