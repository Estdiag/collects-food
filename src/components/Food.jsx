export default function Food() {  
  return (
    <div
    className="food"
      style={{
        position: 'absolute',
        width: '10px',
        left: `${Math.floor( (Math.random() * 1360))}px`,
        top: `${Math.floor( (Math.random() * 750))}px`,
        height: '10px',
        borderRadius: '50%',
        backgroundColor: 'yellow',
      }}
    />
  );
}
