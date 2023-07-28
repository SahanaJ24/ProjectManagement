import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssessmentIcon from '@mui/icons-material/Assessment';


export const EmpSidebarData = [
    {
        title: 'Profile',
        path:'/profile',
        icon: <AccountCircleIcon/>,
    },
    {
        title: 'Project',
        path:'/ProjectGet',
        icon: <ViewQuiltIcon/>,
    },
    {
        title: 'Resource',
        path:'/EmpEmployee',
        icon: <GroupAddIcon/>,
    },
    {
        title: 'Task',
        path:'/EmpTask',
        icon: <FormatListBulletedIcon/>,
    },
    {
        title: 'Risk',
        path:'/risk',
        icon: <AssessmentIcon/>,
    },
    {
        title: 'Feedback',
        path:'/feedback',
        icon: <EmojiEventsIcon/>,
    }
]