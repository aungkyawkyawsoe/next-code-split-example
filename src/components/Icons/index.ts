import { IconType } from 'react-icons';
import { FaTrophy } from 'react-icons/fa';
import { GiDiamondTrophy } from "react-icons/gi";
import { GoTrophy } from "react-icons/go";
import { PiTrophyLight } from "react-icons/pi";

const Icons: {
    [key: string]: IconType;
} = {
    "legend": FaTrophy,
    "epic": GiDiamondTrophy,
    "grandmaster": GoTrophy,
    "master": PiTrophyLight,
}

export default Icons;

