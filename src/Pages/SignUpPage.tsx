import { IconAnchor, IconArrowLeft } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "../Components/SignUpLogin/Login";
import SignUp from "../Components/SignUpLogin/SignUp";
import { Button } from "@mantine/core";

const SignUpPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    return <div className="h-[100vh] w-[100vw] min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden sm-mx:overflow-y-auto relative">
        <Button size="sm" className="!absolute left-5 z-10" color="brightSun.4" my="lg" onClick={() => navigate("/")} leftSection={<IconArrowLeft size={20} />} variant="light">Home</Button>
        <div className={`transition-all relative ease-in-out duration-1000 flex [&>*]:flex-shrink-0 ${location.pathname=='/signup'?'-translate-x-1/2 sm-mx:-translate-x-full':'translate-x-0'}`}>
            <Login />
            <div className={`w-1/2 h-[100vh] sm-mx:hidden  sm-mx:min-h-full transition-all duration-1000 ease-in-out ${location.pathname=="/signup"?"rounded-r-[200px]":"rounded-l-[200px]"} bg-mine-shaft-900 flex items-center gap-5 justify-center flex-col`}>
                <div className="flex gap-1 items-center text-gold-400">
                    <IconAnchor className="h-16 w-16" stroke={2.5} />
                    <div className="text-6xl bs-mx:text-5xl md-mx:text-4xl sm-mx:text-3xl font-semibold">JobHook</div>
                </div>
                <div className="text-2xl bs-mx:text-xl md-mx:text-lg text-mine-shaft-200 font-semibold">Find the job made for you</div>
            </div>
            <SignUp />
        </div>
    </div>
}
export default SignUpPage;