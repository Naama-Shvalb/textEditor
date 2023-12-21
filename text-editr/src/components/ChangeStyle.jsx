import {textManager} from '../TextManager'

export const ChangeStyle = () => {
    const handleColor = (color) => {
        textManager.setActiveColor(color)
    }

    const handleSize = (size) => {
        textManager.setActiveSize(size);
    }

    return <>
    <div>
    <button  className='redBtn' onClick={() => handleColor('red')}>
        {"red"}
    </button>
    <button className='yelowBtn' onClick={() => handleColor('yellow')}>
        {"yellow"}
    </button>
    <button className='blackBtn' onClick={() => handleColor('black')}>
        {"black"}
    </button>
    <button className='blueBtn' onClick={() => handleColor('blue')}>
        {"blue"}
    </button>
    </div>
    <div>
    <button onClick={() => handleSize(1)}>
        {'+'}
    </button>
    <button onClick={() => handleSize(-1)}>
        {'-'}
    </button>
    </div>
    
    </>
}