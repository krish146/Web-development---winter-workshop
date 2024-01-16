import Aboutus from './Aboutus';
import Card from './Card';

const Menu = () => {
    const dishes = [
        {
          itemname: "Burger",
          description: "Cheesy burger with extra mayonnaise and patty.",
          price: '$9',
          id: 1,
          bac: "images.jpeg" 
        },{
          itemname: "Spicy_pasta",
          description: "Fiery pasta with a blend of exotic spices and herbs.",
          price: '$12',
          id: 2,
          bac: "images (1).jpeg" 
        },
        {
          itemname: "Choco_delight",
          description: "Decadent chocolate delight with layers of rich cocoa and cream.",
          price: '$8',
          id: 3,
          bac: "chocodelight.jpeg" 
        }
      ];
      
          return (
    <div className="body">
            
        <div className="menu">
        <h2>Menu</h2> 
           <Card dishes={dishes}></Card>
        </div>
        <Aboutus></Aboutus>
    </div>
     );
}
 
export default Menu;<h1>Menu</h1>