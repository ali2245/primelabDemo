const colors = (isDark = false) => ({
    buttonInactive: isDark ? '#afafaf' : '#afafaf',
    buttonActive: isDark ? '#2567e8' : '#2567e8',
    textPrimary: isDark ? 'white' : 'black',
    background: isDark ? '#000' : '#fff',
    text_black: isDark ? 'white' : '#1E1E1E',
    line_grey: isDark ? '#9D9CB4' : '#E5E5E5',
    error_red: '#CC4545',
    transparent: 'transparent',
    transparent_4: 'rgba(0,0,0,0.4)',
    inputBackground: isDark ? '#f6f6f6' : '#f6f6f6',
    white: '#fff',
    black: '#000'
})

export default colors