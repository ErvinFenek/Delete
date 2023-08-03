import React, {useContext, useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {check} from "./http/userApi";
import Spinner from "react-bootstrap/Spinner";

const  App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then(data => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])
    if(loading) {
        return <Spinner animation={"grow"}/>
    }

  return (
    <React.StrictMode >
      <AppRouter />
    </React.StrictMode>
  );
});

export default App;
