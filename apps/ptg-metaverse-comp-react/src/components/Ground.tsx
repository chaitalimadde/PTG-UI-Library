
const Ground = () => {
    return (
        <mesh rotation-x={Math.PI * -0.5} receiveShadow>
                <planeGeometry args={[40, 40]} />
                <meshStandardMaterial color={"#458745"} />
            </mesh>
    )
};

export default Ground;

