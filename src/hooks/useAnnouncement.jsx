import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
const useAnnouncement = () => {
    const axiosSecure = useAxiosSecure();
    const {data: announcements = [], isLoading} = useQuery({
      queryKey: ['announcements'],
      queryFn: async () => {
        const {data} = await axiosSecure('/announcements')
        return data;
      }
    })
    return [announcements , isLoading]
};

export default useAnnouncement;