import React from 'react';
import * as AiIcons from 'react-icons/ai'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import AssessmentIcon from '@mui/icons-material/Assessment';


export const SidebarData = [
    {
        title: 'Profile',
        path:'/profile',
        icon: <AccountCircleIcon/>,
    },
    {
        title: 'Project',
        path:'/AProject',
        icon: <ViewQuiltIcon/>,
    },
    {
        title: 'Resource',
        path:'/Employees',
        icon: <GroupAddIcon/>,
    },
    {
        title: 'Task',
        path:'/task',
        icon: <FormatListBulletedIcon/>,
    },
    {
        title: 'Risk',
        path:'/EmpRisk',
        icon: < AssessmentIcon />,
    },
    {
        title: 'Feedback',
        path:'/feedback',
        icon: <EmojiEventsIcon/>,
    }
]