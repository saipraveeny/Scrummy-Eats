import classes from "./AvailableMeals.module.css";
import Card from "../UI/card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Noodles",
    description: "finest noodles",
    price: 60,
  },
  {
    id: "m2",
    name: "Pasta",
    description: "A italian specialty!",
    price: 110,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American taste",
    price: 80,
  },
  {
    id: "m4",
    name: "Pizza",
    description: "Healthy...",
    price: 90,
  },
  {
    id: "m5",
    name: "Dessert",
    description: "sweet and delicious ",
    price: 30,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <h1>Menu</h1>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
