# Food Ordering App - Namaste React 🚀

This repository is to document my progress on the food ordering app project from Namaste React Course by Akshay Saini

# Parcel [On its own and also while using different packages]

- Dev Build
- Local Server
- Automatically Refreshes Your Page (HMR = Hot Module Replacement)
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification of File (Production)
- Bundling
- Compressing
- Consistent Hashing (!)
- Code Splitting
- Differential Bundling - generates a nomodule fallback to support older browsers when you use script type module
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code (ex : functions, random unused code)
- Different dev and prod bundles (https://github.com/browserslist/browserslist#query-composition)

<!-- - - Planning
- Header
- - Logo
- - Nav Items
- Body
- - Search bar
- - Card/Restaurant Container
-           - Restaurant Card
-                - Images
-                - Name of restaurant
-                - Star Rating
-                - Cuisines
-                - Delivery Time
- Footer
- - Copyright
- - Links
- - Address, Contact info.
 -->

<!--* -Two Types of export import

- 1 export default CDN_URL
- import CDN_URL from path

- 2 export const CDN_URL = {...}
- import {CDN_URL} from path -->

# React Hooks

(Normal JS utility functions)

- useState()
- useEffect()

<ul>
        {itemCards.map((item) => (
          <div
            key={item.card.info.id}
            className="flex p-8 justify-between w-full"
          >
            <div className="p-4 w-[65%]">
              <h2 className="font-bold">
                {item.card.info.name} -{" "}
                {item.card.info.defaultPrice / 100 ||
                  item.card.info.price / 100}{" "}
                ₹
              </h2>
              <h4>{item.card.info.description}</h4>
            </div>
            <div className="">
              <img
                alt="res-logo"
                src={CDN_URL + item.card.info.imageId}
                className="h-[150px] w-[200px] object-cover"
              />
            </div>
          </div>
        ))}
      </ul>
