export interface Producttype {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
  strCategory: string;
  strInstructions: string;
  amount: number;
}

export interface Categorytype {
  idCategory: string;
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
}

export interface CartArrtype {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  amount: number;
  count: number;
}

export interface Ordertype {
  orderId: number;
  items: CartArrtype[];
  total: number;
}
