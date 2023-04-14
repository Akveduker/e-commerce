const dotParameters = 20
const containerMaxWidth = 266
const dotMargin = dotParameters / 2
const C2A = '#6a983c'
const C1E = '#EBEBEB'
const C1D = '#D1D1D1'
export const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    maxWidth: `${containerMaxWidth - dotParameters}px`,
    margin: `0 ${dotMargin}px`,
}
export const railStyle: React.CSSProperties = {
    backgroundColor: C1E,
    borderRadius: '12px',
    height: '6px',
    width: `${containerMaxWidth}px`,
    left: `-${dotMargin}px`
}
export const activeRailStyle: React.CSSProperties = {
    backgroundColor: C2A,
    height: '6px',
}
export const activeDotStyle: React.CSSProperties = {
    boxShadow: 'none',
}
export const dotStyle: React.CSSProperties = {
    backgroundColor: '#fff',
    height: `${dotParameters}px`,
    width: `${dotParameters}px`,
    opacity: '1',
    border: `1px solid ${C1D}`,
    marginTop: 0,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.15)',
}
export const styles = {
    style: containerStyle,
    railStyle: railStyle,
    trackStyle: activeRailStyle,
    handleStyle: dotStyle,
    activeDotStyle: activeDotStyle,
}