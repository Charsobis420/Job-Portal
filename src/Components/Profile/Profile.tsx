import { ActionIcon, Avatar, Button, Divider, FileInput, Overlay, TagsInput, Textarea } from "@mantine/core";
import { IconAdjustments, IconBriefcase, IconDeviceFloppy, IconEdit, IconMapPin, IconPencil, IconPlus } from "@tabler/icons-react";
import ExpCard from "./ExpCard";
import CertiCard from "./CertiCard";
import { useEffect, useState } from "react";
import SelectInput from "./SelectInput";
import ExpInput from "./ExpInput";
import CertiInput from "./CertiInput";
import fields from "../../Data/Profile";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../Services/ProfileService";
import Info from "./Info";
import { changeProfile, setProfile } from "../../Slices/ProfileSlice";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Certificate from "./Certificate";
import { useHover } from "@mantine/hooks";
import { successNotification } from "../../Services/NotificationService";
import { getBase64 } from "../../Services/Utilities";

const Profile = (props: any) => {
    const dispatch = useDispatch();
    const profile = useSelector((state: any) => state.profile);
    const { hovered, ref } = useHover();
    const handleFileChange = async (image: any) => {
        let picture: any = await getBase64(image);
        let updatedProfile = { ...profile, picture: picture.split(',')[1] };
        dispatch(changeProfile(updatedProfile));
        successNotification("Success", "Profile Picture Updated Successfully");
    }

    return <div className="w-4/5 lg-mx:w-full mx-auto">
        <div className="" >
            <div className="relative px-5">
                <img className="rounded-t-2xl xs-mx:h-32" src="/Profile/banner.jpg" alt="" />
                <div ref={ref} className="absolute cursor-pointer flex items-center justify-center !rounded-full -bottom-1/3 md-mx:-bottom-10 sm-mx:-bottom-16 left-6">
                    <Avatar className="!w-48 !h-48 md-mx:!w-40 md-mx:!h-40 rounded-full border-mine-shaft-950 border-8 sm-mx:!w-36 sm-mx:!h-36 xs-mx:!w-32 xs-mx:!h-32" src={profile.picture ? `data:image/png;base64,${profile.picture}` : "/avatar.png"} alt="" />
                    {hovered && <Overlay className="!rounded-full" color="#000" backgroundOpacity={0.75} />}
                    {hovered && <IconEdit className="absolute z-[300] !w-16 !h-16" />}
                    {hovered && <FileInput onChange={handleFileChange} className="absolute [&_*]:!rounded-full z-[301] [&_*]:!h-full !h-full w-full" variant="transparent" accept="image/png,image/jpeg" />}
                </div>
            </div>
        </div>

        <div className="px-3 pt-2 mt-16">
            <Info />
            <Divider my="xl" />
            <About />
            <Divider my="xl" />
            <Skills />
            <Divider my="xl" />
            <Experience />
            <Divider my="xl" />
            <Certificate />
        </div>

    </div>
}
export default Profile;