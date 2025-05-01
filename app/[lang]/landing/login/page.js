
import Login from "../../components/landing/LogIn";
import { getDictionary } from "../../dictionaries/dictionaries";

const LoginPage = async ({params: {lang}}) => {
    const dict = await getDictionary(lang)
    return (
        <div>
            <Login dict={dict}/>
            
        </div>
    );
};

export default LoginPage;