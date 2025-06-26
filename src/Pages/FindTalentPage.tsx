import { Divider } from "@mantine/core";
import SearchBar from "../Components/FindTalent/SearchBar";
import Talents from "../Components/FindTalent/Talents";

const FindTalentPage = () => {
    return (
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
            <SearchBar />
            <Divider size="xs" mx="md" />
            <Talents />
        </div>
    )
}
export default FindTalentPage;