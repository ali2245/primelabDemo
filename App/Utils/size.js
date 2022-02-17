import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
const BASE_WIDTH = 375
const BASE_HEIGHT = 812

export const getWidth = (size) => {
    const percentage = (size * 100) / BASE_WIDTH
    return wp(percentage)
}

export const getHeight = (size) => {
    const percentage = (size * 100) / BASE_HEIGHT
    return hp(percentage)
}

export const rotate = (angle = 180) => {
    return {
        transform: [{ rotate: `${angle}deg` }]
    }
}