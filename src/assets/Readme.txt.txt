Engineering decides to go ahead implement the POC for a hotel reservation system. 

AS the first iteration,  ENG will create a search and master/detail page with CRUD features.

Following is the requirement
1. Engineering MUST use Visual Studio Code with React V18 and its React Material for GUI
2. Engineering need create a search page with search criteria and result table.(check reservation.json for required data (2 entries))
3. Engineering need create a popup dialog (modal dialog) to display the detail reservation (check GUI.png for UI sketch)
4. Engineering need storybook to create search criteria story, result table story and detail page story.  
5. Engineer MUST use Function Component approach and use hook / State / Context to load 2 entries from reservation.json into memory and manage search logic.
6. Engineer MUST create relevant component objects to display search criteria, search result and detail reservation by double clicking the search result. 
7. Engineer MUST enhance add/modify/delete functions to provide CRUD for reservation. Please provide some basic form validation for add/modify.  If you choose 3rd lib, please explain the reason.
8. Engineer MUST use a observable/subscription in the useEffect hook to add new reservation to the in memory cache, so user can query those newly added reservation on the fly. 
9. Engineer MUST apply the standard React coding style guide throughout the implementation. For example, import order, CamelCase, PascalCase
10. Engineer MUST create Jest unit test for each component object. We expect a 80% code coverage. 

It is mandatory to apply validation to the fields.
It is mandatory to use the RXJS by applying Subject/Observable/Subscription.
It is mandatory to use storybook by applying three stories.
It is mandatory to have unit test coverage over 80%

Please package and send us the whole work repository (exclude the nodes_modules) when complete. A GitHub/Gitlab link also works for us.
