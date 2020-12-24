# opensourceshop
MIT licensed shop for Reacttraining + Firebase + Stripe payment gateway + donations

-------------------------------------------------------------------
-------------------------------------------------------------------
FIRST SETUP:

run 
npm install OR yarn install
in a terminal to install all node_modules required

Then to test the app run in terminal:
npm start  OR yarn start

-------------------------------------------------------------------
-------------------------------------------------------------------

Progress:

-added components and pages
-added scss
-added favicon
-added responsiveness
-probably forgot something cause its late ;

UPDATE: 22.12.2020

-------------------------------------------------------------------
-------------------------------------------------------------------

Progress:

-added full responsive components and scss styles
-upgraded main-menu.component.jsx for large image thumbnails to child 4 and 5

UPDATE: 23.12.2020

-------------------------------------------------------------------
-------------------------------------------------------------------
Progress:

-added simple routing ability to menu-items withRouter HOC (higher order component)
HYPED

UPDATE: 23.12.2020:
-added new Pages:
    shop
-added to shop:
   shop.data 
    contains following shopping item params:
        
        	id: ,               //id of section
		title: '',          //section title
		routeName: '',      //route
		items: [            //item array with params
            id, 
            name, 
            shortName,      //added shortName for mobile optimazation
            imageUrl, 
            price
        ]
-added new components:
    collection-preview      //limits all shopping items to 4 max
    collection-item         //contains the image, name and other params of shop.data

-added/reworked some scss attribute and responisveness for better looks of all components, now all parts are fully responsive and mobile   optmization is now alot better

-------------------------------------------------------------------
-------------------------------------------------------------------

CHRISTMAS UPDATE:
    -added some minor changes to FrontEnd
    -added Logo (my own) and Header Navigation
    -Doesnt looks so good atm so it will be improved soon

MERRY CHRISTMAS EVERYONE
