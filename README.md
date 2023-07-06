# shop-ui
An application for managing goods and selling them in an online store, which consumes [REST API](https://github.com/KarinaVeremeyeva/Shop).
The project has role-based authentication. The application user has the ability to filter content using various types of dynamic criteria and process shopping cart items. The admin role can create, update, and delete content.

## Technologies
- React
- Redux
- Material UI

## Screenshots
#### Products page:
Page available to all registered and unregistered users. Products are displayed based on the selected category and filters.
Filters are generated dynamically based on the attributes that are present in all products in the selection

![image](https://github.com/KarinaVeremeyeva/shop-ui/assets/57318127/9cc44087-71b0-4885-a8bb-69d55a4dfb71)

#### Product details:
Here a registered user can add an item to the cart

![image](https://github.com/KarinaVeremeyeva/shop-ui/assets/57318127/3af1c736-647f-451e-ade8-9de7e9f95aa8)

#### Shopping cart:
Page for managing items in the cart. Available only to registered users

![image](https://github.com/KarinaVeremeyeva/shop-ui/assets/57318127/b009174a-5f3d-4a8e-9c6a-d4773f16c213)

#### Register a new user:

<img src="https://github.com/KarinaVeremeyeva/shop-ui/assets/57318127/d73cf506-2cd6-4b5e-a028-d900a8e1d10a" width=50% height=50%>

#### Admin panel:
Three pages for object management: categories, details and products.
Each page is available only to the administrator and allows you to perform CRUD operations on each of the entities.
For a category, the important part is choosing a parent category while blocking the creation of a cyclic relationship to child categories.
Details are limited to three types: string (color, brand), number (camera resolution) and boolean (presence/absence of some attribute).
For products, the main part is the dynamic selection of details

![image](https://github.com/KarinaVeremeyeva/shop-ui/assets/57318127/5e60b0fa-53d5-4f79-94be-af40d95e1f4d)

#### Edit product form:

<img src="https://github.com/KarinaVeremeyeva/shop-ui/assets/57318127/0129c3a3-41c6-4e20-a667-7c4bf6ee6d8b" width=50% height=50%>

#### Add product form:

<img src="https://github.com/KarinaVeremeyeva/shop-ui/assets/57318127/9695ac06-5c00-4f89-a292-dfffe1f20285" width=50% height=50%>

#### Confirm delete dialog:

<img src="https://github.com/KarinaVeremeyeva/shop-ui/assets/57318127/ba3ceb19-d925-41d4-83e2-7ca363dfe9bb" width=50% height=50%>
