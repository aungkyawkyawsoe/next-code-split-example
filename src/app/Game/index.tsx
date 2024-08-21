import dynamic from 'next/dynamic'
import { FC } from 'react'
import Icons from '@/components/Icons';

interface GameIntentProps {
    level: string;
}

const GameIntent: FC<GameIntentProps> = ({ level }) => {
    const LevelIcon = dynamic(() => Promise.resolve(Icons[level]));

    return (
        <div>
            Your Level: {level}
            <LevelIcon />
        </div>
    );
}

export default GameIntent