 In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    - Actions are code that contain an action type and the data associated with that action type.
    - Reducers are functions that return a updated version of the state as an object.
    - The store is where state is contained in the application.

    - The store is known as a 'single source of truth' because all state is found in the store rather than spread out in the application.

 What is the difference between Application state and Component state? When would be a good time to use one over the other?

    - Application state is global and accessible through the entire application. Component state is only accessible in a specific component and can only be passed down to children.

 Describe redux-thunk, what does it allow us to do? How does it change our action-creators?

    - Redux-thunk is middleware that allows async operations inside action-creators