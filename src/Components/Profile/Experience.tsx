import { ActionIcon } from "@mantine/core";
import { IconDeviceFloppy, IconPencil, IconPlus, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ExpInput from "./ExpInput";
import ExpCard from "./ExpCard";
import { useMediaQuery } from "@mantine/hooks";

const Experience = () => {
    const matches = useMediaQuery('(max-width: 475px)');
    const profile = useSelector((state: any) => state.profile);
    const [edit, setEdit] = useState(false);
    const [addExp, setAddExp] = useState(false);
    const handleClick = () => {
        setEdit(!edit);
    }
    return <div className="px-3">
    <div className="text-2xl font-semibold mb-5 flex justify-between">Experience <div className="flex gap-2"><ActionIcon onClick={() => setAddExp(true)} size={matches?"md":"lg"} color="brightSun.4" variant="subtle"> <IconPlus className="h-4/5 w-4/5" />
    </ActionIcon><ActionIcon onClick={handleClick} size={matches?"md":"lg"} color={edit?"red.8":"brightSun.4"} variant="subtle">
        {edit ? <IconX className="h-4/5 w-4/5" /> : <IconPencil className="h-4/5 w-4/5" />}
    </ActionIcon></div></div>
    <div className="flex flex-col gap-8">
        {
            profile?.experiences?.map((exp: any, index: number) => <ExpCard key={index} index={index} {...exp} edit = {edit} />)
        }
        {addExp && <ExpInput add setEdit={setAddExp}/>}
    </div>
</div>
}
export default Experience;