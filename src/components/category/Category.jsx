
import style from './Category.module.css';

const Category = ({item}) => {
  return (
    <div className={style.container}>
      <img src={item.img} alt="" />
      <div className={style.info}>
        <h1>{item.title}</h1>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default Category;
