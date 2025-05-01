import SignUp from "../../components/landing/SignUp";
import { getDictionary } from "../../dictionaries/dictionaries";

const SignUpPage = async ({params:{lang}}) => {
 const dict= await getDictionary(lang)
    return (
        <div>
            <SignUp dict={dict}/>
        </div>
    );
};

export default SignUpPage;