import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';

export const dialogMessage = {
    success: {
        title: "Đăng ký thành công!",
        desc: "Cảm ơn bạn đã gửi thông tin ứng tuyển vào ET Club! Chúng tôi đã nhận được dữ liệu của bạn và sẽ liên hệ sớm qua email. Chúc bạn may mắn!",
        alertType: "success",
        Icon: DoneIcon
    },
    notUniqueEmail: {
        title: "Email đã tồn tại!",
        desc: "Email bạn vừa nhập đã được sử dụng để ứng tuyển trước đó. Vui lòng kiểm tra lại hoặc dùng email khác.",
        alertType: "error",
        Icon: CloseIcon
    },
    error: {
        title: "Có lỗi xảy ra!",
        desc: "Đã có lỗi trong quá trình gửi thông tin. Vui lòng thử lại sau ít phút hoặc liên hệ với ET Club để được hỗ trợ.",
        alertType: "error",
        Icon: CloseIcon
    }
};

export const finalUrl = "";

export const navbarLinks = [
    {
        id: "about",
        label: "Về ET Club",
        dropdown: true,
        items: [
            { id: "1st", label: "Giới thiệu", url: finalUrl + "/introduction" },
            { id: "2nd", label: "Cơ cấu tổ chức", url: finalUrl + "/hr-structure" },
        ]
    },
    { id: "activities", label: "Hoạt động", url: finalUrl + "/activities" },
    {
        id: "etzone",
        label: "ET Zone",
        dropdown: true,
        items: [
            { id: "1st", label: "ET News", url: finalUrl + "/et-news" },
            { id: "2nd", label: "ET Blog", url: finalUrl + "/ew-blog" },
        ]
    },
    { id: "ctv", label: "Tìm kiếm CTV", url: "#" },
    { id: "search", label: "Tìm kiếm", url: finalUrl + "/search", search: true } // thêm search
];

export const footerLinks = [
    {
        "title": "Về ET Club",
        "links": [
            { "id": "introduction", "label": "Giới thiệu", "url": finalUrl + "/introduction" },
            { "id": "hr", "label": "Cơ cấu tổ chức", "url": finalUrl + "/hr-structure" }
        ]
    },
    {
        "title": "Hoạt động",
        "links": [
            { "id": "programs", "label": "Chương trình", "url": finalUrl + "/activities" },
            { "id": "et-news", "label": "ET News", "url": finalUrl + "/et-news" },
            { "id": "et-blog", "label": "ET Blog", "url": finalUrl + "/et-blog" },
            { "id": "ctv", "label": "Tìm kiếm CTV", "url": "#" }
        ]
    },
    {
        "title": "Hỗ trợ",
        "links": [
            { "id": "faqs", "label": "FAQs", "url": finalUrl + "/faqs" }
        ]
    },
    {
        "title": "Follow us",
        "links": [
            { "id": "facebook-group", "label": "Group cộng đồng", "url": "https://www.facebook.com/groups/955638881998102", "external": true },
            { "id": "linkedin", "label": "Linkedin", "url": "https://www.linkedin.com/company/economic-technology-club-ueh/?originalSubdomain=vn", "external": true },
            { "id": "youtube", "label": "Youtube", "url": "https://www.youtube.com/c/C%C3%A2ul%E1%BA%A1cb%E1%BB%99C%C3%B4ngNgh%E1%BB%87KinhT%E1%BA%BF", "external": true },
            { "id": "facebook", "label": "Facebook", "url": "https://www.facebook.com/ETClub.UEH", "external": true }
        ]
    }
]
