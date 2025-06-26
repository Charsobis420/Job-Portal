import { Anchor, Button, Checkbox, Group, LoadingOverlay, PasswordInput, Radio, rem, TextInput } from "@mantine/core";
import { IconAt, IconCheck, IconLock, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../../Services/UserService";
import { signUpValidation } from "../../Services/FormValidation";
import { notifications } from "@mantine/notifications";
import { errorNotification, successNotification } from "../../Services/NotificationService";

const SignUp = () => {
    const form = {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        accountType: "APPLICANT"
    }
    const [data, setData] = useState<{ [key: string]: string }>(form);
    const [formError, setFormError] = useState<{ [key: string]: string }>(form);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const handleChange = (event: any) => {
        if (typeof (event) == "string") {
            setData({ ...data, accountType: event });
            return;
        }
        let name = event.target.name, value = event.target.value;
        setData({ ...data, [name]: value });
        setFormError({ ...formError, [name]: signUpValidation(name, value) });
        if (name === "password" && data.confirmPassword !== "") {
            let err = "";
            if (data.confirmPassword !== value) err = "Passwords do not match";
            setFormError({ ...formError, [name]: signUpValidation(name, value), confirmPassword: err });
        }
        if (name === "confirmPassword") {
            if (data.password !== value) setFormError({ ...formError, [name]: "Passwords do not match" });
            else setFormError({ ...formError, confirmPassword: "" });
        }
    }
    const handleSubmit = () => {
        let valid = true, newFormError: { [key: string]: string } = {};
        for (let key in data) {
            if (key === "accountType") continue;
            if (key !== "confirmPassword") newFormError[key] = signUpValidation(key, data[key]);
            else if (data[key] !== data["password"]) newFormError[key] = "Passwords do not match";
            if (newFormError[key]) valid = false;
        }
        setFormError(newFormError);
        if (valid === true) {
            setLoading(true);
            registerUser(data).then(res => {
                console.log(res);
                setData(form);
                successNotification("Registered Successfully", "Redirecting to login page...");
                // notifications.show({
                //     title: 'Registered Successfully',
                //     message: 'Redirecting to login page...',
                //     withCloseButton: true,
                //     icon:<IconCheck style={{width:"90%", height:"90%"}}/>,
                //     color:"teal",
                //     withBorder:true,
                //     className:"!border-green-500"
                //   })
                setTimeout(() => {
                    setLoading(false);
                    navigate("/login");
                }, 4000)
            }).catch((err) => {
                setLoading(false);
                console.log(err);
                errorNotification("Registration Failed", err.response.data.errorMessage);
                // notifications.show({
                //     title: 'Registration Failed',
                //     message: err.response.data.errorMessage,
                //     withCloseButton: true,
                //     icon:<IconX style={{width:"90%", height:"90%"}}/>,
                //     color:"red",
                //     withBorder:true,
                //     className:"!border-red-500"
                //   })
            });
        }
    }
    return <><LoadingOverlay
        visible={loading}
        zIndex={1000}
        className="translate-x-1/2"
        overlayProps={{ radius: 'sm', blur: 2 }}
        loaderProps={{ color: 'brightSun.4', type: 'bars' }}
    /><div className="w-1/2 sm-mx:py-20 sm-mx:w-full px-20 bs-mx:px-10 md-mx:px-5 flex flex-col justify-center gap-3">
            <div className="text-2xl font-semibold">Create Account</div>
            <TextInput value={data.name} error={formError.name} name="name" onChange={handleChange} withAsterisk label="Full Name" placeholder="Your name" />
            <TextInput value={data.email} error={formError.email} name="email" onChange={handleChange} withAsterisk leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />} label="Email" placeholder="Your email" />
            <PasswordInput value={data.password} error={formError.password} name="password" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Password" placeholder="Password" />
            <PasswordInput value={data.confirmPassword} error={formError.confirmPassword} name="confirmPassword" onChange={handleChange} withAsterisk leftSection={<IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />} label="Confirm Password" placeholder="Confirm password" />
            <Radio.Group
                value={data.accountType}
                onChange={handleChange}
                label="You are?"
                withAsterisk
            >
                <div className="flex gap-6 sm-mx:gap-3 ">
                    <Group mt="xs">
                        <Radio className="py-4 px-6 sm-mx:px-4 sm-mx:py-2 border hover:bg-mine-shaft-900 has-[:checked]:bg-gold-400/5 has-[:checked]:border-gold-400 border-mine-shaft-800 rounded-lg" autoContrast value="APPLICANT" label="Applicant" />
                        <Radio className="py-4 px-6 sm-mx:px-4 sm-mx:py-2 border hover:bg-mine-shaft-900 has-[:checked]:bg-gold-400/5 has-[:checked]:border-gold-400 border-mine-shaft-800 rounded-lg" autoContrast value="EMPLOYER" label="Employer" />
                    </Group>
                </div>
            </Radio.Group>
            <Checkbox autoContrast label={<>I accept{' '} <Anchor>terms & conditions</Anchor></>} />
            <Button loading={loading} onClick={handleSubmit} autoContrast variant="filled">Sign Up</Button>
            <div className="text-center sm-mx:text-sm xs-mx:text-xs">Have an account? <span className="text-gold-400 hover:underline cursor-pointer sm-mx:text-sm xs-mx:text-xs" onClick={() => { navigate("/login"); setFormError(form); setData(form) }}>Login</span></div>
        </div>
    </>
}
export default SignUp;