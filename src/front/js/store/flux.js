const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            message: null,
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            auth: false
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },

            getMessage: () => {
                const store = getStore();
                const opts = {
                    headers: {
                        "Authorization": "Bearer " + store.auth
                    }
                }

                // fetching data from the backend
                fetch(process.env.BACKEND_URL + '/api/hello', opts)
                    .then(resp => resp.json())
                    .then(data => setStore({
                        message: data.message
                    }))

            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo
                });
            },

            // syncTokenFromLocalStorage: () => {
            //     const token = localStorage.getItem("token")
            //     if (token )
            // },

            login: (email, password) => {
                // console.log(email, password);
                fetch(process.env.BACKEND_URL + '/api/login', {
                        method: "POST",
                        body: JSON.stringify({
                            "email": email,
                            "password": password
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                    .then((response) => {
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data);
                        localStorage.setItem("token", data.access_token)
                    })
            },
            logout: () => {
                localStorage.removeItem("token")
                setStore({
                    auth: false
                })
            }
        }
    };
};

export default getState;