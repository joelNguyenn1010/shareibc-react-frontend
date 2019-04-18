## Shareibc

A charity web application for funding company's projects

# The way that Shareibc can contribute/fund to projects:
1. We find redundancy/spare items such as rooms from hotel, electronic devices from electronic store (JB HiFi), etc.

2. and sell it to consumers with the best deals.

3. All profits will go to donations.
## Getting Started
Git clone the project or download and unzip the file.

# Run this command to install all the packages
```
npm i
```
# To run the application
```
npm start
```

# Websites

# Project Structure
## The containers, the components and store
The main structure of the project is in src folder.
1. The containers folder is main components of project. For instance, components such as Project, Product, Cart, Order, User, etc.
2. The components folder is related components for container. For instance, for main containers like Product can have component such as ProductDetails, ProductPagination, etc
3. The store is the redux store. Shareibc uses redux for state management.

# The containers
1. Authentication (deprecated): for managing auth user and authorization user.
2. Contact us: for 'contact us' page containers.
3. Home: the Homepage of the shareibc.
4. Main: is the root tree of all component. Shareibc uses react-router-dom to manipulate the Route of the application.
5. Navbar: the Navigation Bar of the website.
6. ProductContainer: for managing the Product application.
7. Project: for managing the Project application.
8. User: for authication and authorization.

# The related components of container.
1. Contact us.
  * Send Message: control the send message form.
  * ContactUsInfo: the infomation of contact page, a helper memos.
2. Navbar.
  * Links: a href link to containers: Project, Product, Contact Us, About Us, etc
  * UserLink: a href link to: User, Login, Register.
3. Project
  * Project
  * Jumbotron: Big title picture
  * ProjectDeatils: fetch api about details of the project
  * ProjectInfo: fetch API info about the project
4. ProductContainer
  * Pagination: Pagination of the product
5. User
  * The User page
  * Order: see all the user order

https://shareibc.com
