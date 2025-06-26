
import { useEffect, useState } from "react";
import { talents } from "../../Data/TalentData";
import Sort from "../FindJobs/Sort";
import TalentCard from "./TalentCard";
import { getAllProfiles } from "../../Services/ProfileService";
import { useDispatch, useSelector } from "react-redux";
import { resetFilter } from "../../Slices/FilterSlice";
import { resetSort } from "../../Slices/SortSlice";

const Talents = () => {
    const dispatch = useDispatch();
    const [talents, setTalents] = useState<any>([]);
    const filter = useSelector((state: any) => state.filter);
    const sort = useSelector((state: any) => state.sort);
    const [filteredTalents, setFilteredTalents] = useState<any>([]);
    useEffect(() => {
        dispatch(resetFilter());
        getAllProfiles().then((res) => {
            setTalents(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    useEffect(() => {
        if(sort === "Experience (Low to High)") {
            setTalents([...talents].sort((a: any, b: any) => a.totalExp - b.totalExp));
        } else if(sort === "Experience (High to Low)") {
            setTalents([...talents].sort((a: any, b: any) => b.totalExp - a.totalExp));
        }
    }, [sort]);
    useEffect(() => {
        let filteredTalent = talents;

        if(filter.name) filteredTalent = filteredTalent.filter((talent: any) => talent.name.toLowerCase().includes(filter.name.toLowerCase()));
        if(filter["Job Title"] && filter["Job Title"].length > 0) {
            filteredTalent = filteredTalent.filter((talent: any) => filter["Job Title"]?.some((title: any) => talent.jobTitle.toLowerCase().includes(title.toLowerCase())));
        }
        if(filter.Location && filter.Location.length > 0) {
            filteredTalent = filteredTalent.filter((talent: any) => filter.Location?.some((location: any) => talent.location.toLowerCase().includes(location.toLowerCase())));
        }
        if(filter.Skills && filter.Skills.length > 0) {
            filteredTalent = filteredTalent.filter((talent: any) => filter.Skills?.some((skill: any) => talent.skills?.some((talentSkill: any) => talentSkill.toLowerCase().includes(skill.toLowerCase()))));
        }
        if(filter.exp && filter.exp.length > 0) {
            filteredTalent = filteredTalent.filter((talent: any) => talent.totalExp >= filter.exp[0] && talent.totalExp <= filter.exp[1]);
        }
        setFilteredTalents(filteredTalent);
    }, [filter, talents])
    return <div className="p-5">
        <div className="flex justify-between">
            <div className="text-2xl font-semibold">Talents</div>
            <Sort />
        </div>
        <div className="mt-10 flex flex-wrap gap-5 justify-between">
            {
                filteredTalents?.length?filteredTalents.map((talent:any, index: any) => <TalentCard key={index} {...talent} />):<div className="text-xl font-semibold">No Talents Found</div>
            }
        </div>
    </div>
}
export default Talents;