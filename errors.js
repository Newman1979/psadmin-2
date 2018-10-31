/* 
Errors on React project...
Found in chrome devtools causing following error;
Type Error: null is not an object(evaluating 'this.state.authors')
*/

React.createElement("div", null, 
                React.createElement("h1", null, "Authors"), 
                React.createElement(AuthorList, {authors: this.state.authors})
            )
        );
    }
});
/*
10/29/18 
--- Safari
TypeError: undefined is not an object (evaluating 'action.initialData.authors')
Failed to load resource: the server responded with a status of 404 (Not Found)

---Chrome
Uncaught TypeError: Cannot read property 'authors' of undefined
*/