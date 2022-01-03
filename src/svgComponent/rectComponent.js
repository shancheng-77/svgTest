
function RectComponent(props){
    let {width,height,x=0,y=0,color,onMouseEnter,onMouseLeave} = props;
    return (
            <rect x={x} y={y} height={height} width={width} style={{'stroke':'#70d5dd','fill': color,}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                {/*<animateTransform attributeName="transform" type="rotate" begin="0s" dur="10s" from="0 200 200" to="360 400 400" repeatCount="indefinite" />*/}

            </rect>
    )
}
export default RectComponent;
