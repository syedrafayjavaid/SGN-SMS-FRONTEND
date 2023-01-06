// assets
import { UserOutlined, ProfileOutlined, SolutionOutlined, BookOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import VideoCallIcon from '@mui/icons-material/VideoCall';
// icons
const icons = {
    UserOutlined,
    ProfileOutlined,
    SolutionOutlined,
    BookOutlined,
    UsergroupAddOutlined,
    VideoCallIcon
};


const pages = {
    id: 'pages',
    title: 'Pages',
    type: 'group',
    children: [
        {
            id: 'users',
            title: 'Users',
            type: 'item',
            url: '/users/main',
            icon: icons.UserOutlined,
            // target: true
        },
        {
            id: 'courses',
            title: 'Courses',
            type: 'item',
            url: '/courses/',
            icon: icons.BookOutlined,
            // target: true
        }
        , {
            id: 'classes',
            title: 'Classes',
            type: 'item',
            url: '/classes',
            icon: icons.SolutionOutlined,
            // target: true

        },
        {
            id: 'admissions',
            title: 'Admissions',
            type: 'item',
            url: '/admissions',
            icon: icons.UsergroupAddOutlined,
            // target: true

        },
        {
            id: 'videocall',
            title: 'Videocall',
            type: 'item',
            url: '/videocall',
            icon: icons.VideoCallIcon,
            // target: true

        },


    ]
};

export default pages;
