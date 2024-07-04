import Food from './Food';



const food = Array.from({ length: 20 }, () => '');
export default function Board() {
  const handleMove = event => {
   
    const { clientX, clientY } = event;

    

    const circles = document.querySelectorAll('div.food');
    circles.forEach(circle => {
      const rect = circle.getBoundingClientRect();

      if (
        clientX >= rect.left &&
        clientX <= rect.right &&
        clientY >= rect.top &&
        clientY <= rect.bottom
      ) {
        circle.style.display = 'none';
      }
    });
  };

  window.addEventListener('mousemove', handleMove);

  return (
    <div id="board" >
      <p style={{textAlign:'center', width:'100vw'}}>
      MI PRIMER JUEGO
      </p>
  
      {food.map((food, i) => (
        <Food key={i} />
      ))}
    </div>
  );
}
