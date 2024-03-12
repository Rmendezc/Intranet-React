import React from 'react'
import './Sidebar.css';
// import {SubMenu} from './SubMenu'
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import FolderIcon from '@mui/icons-material/Folder';
import DevicesIcon from '@mui/icons-material/Devices';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import BadgeIcon from '@mui/icons-material/Badge';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const SidebarData =  [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/home"
    },
    {
        title: "ADP",
        icon: <RequestQuoteIcon />,
        link: "/adp"
    },
    {
        title: "Learning & Development",
        icon: <SchoolIcon />,
        link: "/learning"
    },
    {
        title: "Announcements",
        icon: <AnnouncementIcon />,
        link: "/announcement",
        iconClosed: <ExpandLessIcon/>,
        iconOpened: <ExpandMoreIcon/>,
        subNav: [
            {
                title: "Newsfeed",
                icon: "",
                link: "/announcement/news"
            },
            {
                title: "CEO Blog",
                icon: "",
                link: "/announcement/ceo"
            }
        ]

    },
    {
        title: "Company Directory",
        icon: <FolderIcon />,
        link: "/company"
    },
    {
        title: "IT-Support",
        icon: <DevicesIcon />,
        link: "/it-support"
    },
    {
        title: "FAQ",
        icon: <QuestionAnswerIcon />,
        link: "/faq"
    },
    {
        title: "Employee Recognition",
        icon: <BadgeIcon />,
        link: "/employee"
    }

]

