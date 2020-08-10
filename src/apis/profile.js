import bxsUserRectangle from '@iconify/icons-bx/bxs-user-rectangle';
import youtubeFilled from '@iconify/icons-ant-design/youtube-filled';
import userSwitchOutlined from '@iconify/icons-ant-design/user-switch-outlined';
import signoutIcon from '@iconify/icons-uil/signout';
import outlineExpandMore from '@iconify/icons-ic/outline-expand-more';
import bxsCloudUpload from '@iconify/icons-bx/bxs-cloud-upload';
import bxHistory from '@iconify/icons-bx/bx-history';
import settingFilled from '@iconify/icons-ant-design/setting-filled';
import bxShieldQuarter from '@iconify/icons-bx/bx-shield-quarter';
import bxsHelpCircle from '@iconify/icons-bx/bxs-help-circle';
import sharpFeedback from '@iconify/icons-ic/sharp-feedback';

export const user = {
    name: 'Abhishek kumar',
    email: 'abhikam1525@gmail.com',
    icon: 'https://yt3.ggpht.com/-MqVwYmVtAvo/AAAAAAAAAAI/AAAAAAAAAAA/Z45Dqu5s5dI/s108-c-k-c0x00ffffff-no-rj-mo/photo.jpg'
}


export const options = [
    {
        id: 1,
        name: 'Your channel',
        icon: bxsUserRectangle
    },
    {
        id: 2,
        name: 'Get Music Premium',
        icon: youtubeFilled
    },
    {
        id: 3,
        name: 'Switch account',
        icon: userSwitchOutlined,
        anotherIcon: outlineExpandMore

    },
    {
        id: 4,
        name: 'Sign out',
        icon: signoutIcon
    },
    
]

export const otherOptions = [
    {
        id: 1,
        name: 'Upload music',
        icon: bxsCloudUpload
    },
    {
        id: 2,
        name: 'History',
        icon: bxHistory
    },
    {
        id: 3,
        name: 'Settings',
        icon: settingFilled
    },
    {
        id: 4,
        name: 'Terms and privacy policy',
        icon: bxShieldQuarter
    },
    {
        id: 5,
        name: 'Help',
        icon: bxsHelpCircle
    },
    {
        id: 6,
        name: 'Send feedback',
        icon: sharpFeedback
    },
]