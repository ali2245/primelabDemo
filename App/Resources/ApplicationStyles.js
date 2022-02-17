import { StyleSheet } from 'react-native';
import Colors from './Colors'
import { getWidth, getHeight } from '../Utils/size';

const ApplicationStyles = (isDark = false) => {
    const colors = Colors(isDark)
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background
        },
    })
}

export default ApplicationStyles